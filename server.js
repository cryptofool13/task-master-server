const Controller = require("./controllers/todo");

module.exports = app => {
  // routes and controller calls go here
  app.get("/", (req, res) => {
    res.send("\nhello\n");
  });
  app.get("/todos", Controller.getTodos);
  app.get("/todos/:id", Controller.getTodo);
  app.post("/todos", Controller.addTodo);
  app.put("/todos/:id", Controller.markComplete);
  app.delete("/todos/:id", Controller.deleteTodo);
};
