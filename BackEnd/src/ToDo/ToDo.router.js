const ToDoRouter = require("express").Router();
const { disp, add, updateList, deleteItem } = require("./ToDo.controller");

ToDoRouter.route("/display").get(disp);
ToDoRouter.route("/add").post(add);
ToDoRouter.route("/update").put(updateList);
ToDoRouter.route("/delete").delete(deleteItem);

module.exports = ToDoRouter;
