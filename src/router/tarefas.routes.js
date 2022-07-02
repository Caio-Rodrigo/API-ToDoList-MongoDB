const tarefasController = require('../controller/tarefas.controllers');
const Tarefa = require('../models/Tarefa');

const router = require('express').Router();

router.get('/', tarefasController.findAllTarefas)
router.get('/:id', tarefasController.findByIdTarefa)
router.post('/', tarefasController.createTarefa)
router.put('/:id', tarefasController.updateTarefa)
router.delete('/:id', tarefasController.deleteTarefa)

module.exports = router