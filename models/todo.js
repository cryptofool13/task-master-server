const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Todo = new Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("todo", Todo);
