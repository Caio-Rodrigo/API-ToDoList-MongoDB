const tarefaService = require('../services/tarefas.service');
const mongoose = require('mongoose');

function validateId(id, res) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(206).send({ message: 'Invalid Id' });
  }
}

function taskExists(tarefa, res) {
  if (!tarefa) {
    return res.status(206).send({ message: 'task not found!' });
  }
}

function fieldsCheck(tarefa, res) {
  if (!tarefa || !tarefa.tarefa || !tarefa.data) {
    if (!tarefa.tarefa) {
      return res.status(400).send({ message: 'Fill in the task field!' });
    }

    if (!tarefa.data) {
      return res.status(400).send({ message: 'Fill in the date field!' });
    }

    return res.status(400).send({ message: 'Fill in all fields!' });
  }
}

const findAllTarefas = async (req, res) => {
  const allTarefas = await tarefaService.findAllTarefas();

  if (allTarefas.length == 0) {
    return res.status(206).send({ message: 'There are no Tasks registered!' });
  }
  res.send(allTarefas);
};

const findByIdTarefa = async (req, res) => {
  const id = req.params.id;

  validateId(id, res);

  const tarefa = await tarefaService.findByIdTarefa(id);

  taskExists(tarefa, res);
  res.send(tarefa);
};

const createTarefa = async (req, res) => {
  const tarefa = req.body;

  fieldsCheck(tarefa, res);
  const newTarefa = await tarefaService.createTarefa(tarefa);

  res.status(201).send(newTarefa);
};

const updateTarefa = async (req, res) => {
  const id = req.params.id;
  const editTarefa = req.body;

  validateId(id, res);

  const tarefa = await tarefaService.findByIdTarefa(id);
  taskExists(tarefa, res);
  fieldsCheck(editTarefa, res);

  res.send(updateTarefa);
};

const deleteTarefa = async (req, res) => {
  const id = req.params.id;

  validateId(id, res)

  const tarefa = await tarefaService.findByIdTarefa(id)

  taskExists(tarefa, res);

  await tarefaService.deleteTarefa(id);

  res.send({message:'Task Deleted Successfully!'})

}

module.exports = { findAllTarefas, findByIdTarefa, createTarefa, updateTarefa, deleteTarefa};
