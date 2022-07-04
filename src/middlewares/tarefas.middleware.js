const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid ID' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  const tarefa = req.body;

  if (!tarefa.tarefa && !tarefa.time ) {
    return res.status(400).send({ message: 'Fill in all fields!' });
  }
  if (!tarefa.tarefa) {
    return res.status(400).send({ message: 'Fill in the task field!' });
  }
  if (!tarefa.time) {
    return res.status(400).send({ message: 'Fill in the date field!' });
  }


 /*  if (
    !tarefa ||
    !tarefa.tarefa ||
    !tarefa.time
  ) {
    return res
      .status(400)
      .send({ message: 'Envie o todos os campos da tarefa!' });
  } */

  next();
};

module.exports = { validId, validObjectBody };
