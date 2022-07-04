const tarefaService = require('../services/tarefas.service');

function taskExists(tarefa, res) {
  if (!tarefa) {
    return res.status(206).send({ message: 'task not found!' });
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

  const tarefa = await tarefaService.findByIdTarefa(id);

  taskExists(tarefa, res);
  res.send(tarefa);
};

const createTarefa = async (req, res) => {
  const tarefa = req.body;

  const newTarefa = await tarefaService.createTarefa(tarefa);

  res.status(201).send(newTarefa);
};

const updateTarefa = async (req, res) => {
  const id = req.params.id;
  const editTarefa = req.body
  const tarefa = await tarefaService.findByIdTarefa(id);
  taskExists(tarefa, res);

  const updateTarefa = await tarefaService.updateTarefa(id, editTarefa);

  res.send(updateTarefa);
};

const deleteTarefa = async (req, res) => {
  const id = req.params.id;
  const tarefa = await tarefaService.findByIdTarefa(id);

  taskExists(tarefa, res);

  await tarefaService.deleteTarefa(id);

  res.send({ message: 'Task Deleted Successfully!' });
};

module.exports = {
  findAllTarefas,
  findByIdTarefa,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
