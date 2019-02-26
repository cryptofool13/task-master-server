const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
const mongoose = require("mongoose");

const server = require("./server");
const { Todo } = require("./models/todo");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGOBD_URI || "mongodb://localhost:27017/todo-redux",
  { useNewUrlParser: true }
);

app.use(bodyParser.json({ type: "*/*" }));

server(app);

const port = process.env.PORT || 3080;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
