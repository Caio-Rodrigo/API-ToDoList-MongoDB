const Tarefa = require('../models/Tarefa');

const findAllTarefas = async (req, res) => await Tarefa.find();
const findByIdTarefa = async (id) => await Tarefa.findById(id);
const createTarefa = async (newTarefa) => await Tarefa.create(newTarefa);
const updateTarefa = async (id, editTarefa) =>
  await Tarefa.findByIdAndUpdate(id, editTarefa).setOptions({
    returnOriginal: false,
  });
const deleteTarefa = async (id) => await Tarefa.findByIdAndDelete(id);

module.exports = {
  findAllTarefas,
  findByIdTarefa,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
