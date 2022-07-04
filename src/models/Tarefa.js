const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  tarefa: { type: String, required: true },
  time: { type: String, required: true },
});

const Tarefa = mongoose.model('Tarefa', TarefaSchema, 'tarefas');

module.exports = Tarefa;
