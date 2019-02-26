const { ObjectID } = require("mongodb");

const Todo = require("../models/todo");

exports.getTodos = (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => {
      res.status(400).send(e);
    }
  );
};

exports.getTodo = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      console.log(e);
      res.status(400).send();
    });
};

exports.addTodo = (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });
  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      console.log(e);
      res.status(400).send();
    }
  );
};

exports.markComplete = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findOneAndUpdate(
    { _id: id },
    { $set: { completed: true } },
    { new: true }
  ).then(
    todo => {
      res.send({ todo });
    },
    e => {
      console.log(e);
      res.status(400).send();
    }
  );
};

exports.deleteTodo = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Todo.findOneAndDelete(id)
    .then(todo => {
      if (!todo) {
        return res.status(404).send();
      }
      res.send({ todo });
    })
    .catch(e => {
      console.log(e);
      res.status(400).send();
    });
};
