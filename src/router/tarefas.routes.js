const router = require('express').Router();
const tarefasController = require('../controller/tarefas.controllers');
const {
  validId,
  validObjectBody,
} = require('../middlewares/tarefas.middleware');

router.get('/', tarefasController.findAllTarefas);
router.get('/:id', validId, tarefasController.findByIdTarefa);
router.post('/', validObjectBody, tarefasController.createTarefa);
router.put('/:id', validObjectBody, validId, tarefasController.updateTarefa);
router.delete('/:id', validId, tarefasController.deleteTarefa);

module.exports = router;
