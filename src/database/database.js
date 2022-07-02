const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://localhost:27017/tarefas-db';

function connectToDatabase() {
  mongoose
    .connect(DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('Connected to database...'))
    .catch((error) => {
      console.log(`error connecting to database:${error}`);
    });
}

module.exports = connectToDatabase