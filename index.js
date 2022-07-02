const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./src/database/database");
const tarefasRouter = require('./src/router/tarefas.routes')

const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());

connectToDatabase()

app.use('/tarefas', tarefasRouter)

app.listen(port, () =>
  console.log(`Server listening on port http://localhost:${port}`)
);
