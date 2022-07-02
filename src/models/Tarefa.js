const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  tarefa: { type: String, required: true },
  data: { type: Date, required: true },
});

const Tarefa = mongoose.model('Tarefa', TarefaSchema, 'tarefas');

module.exports = Tarefa;
