const express = require("express");
const app = express();
const cors = require("cors");
const ToDoRouter = require("./ToDo/ToDo.router.js");

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.json());
app.use(cors());
app.use("/todo", ToDoRouter);

const errorHandler = (err, req, res, next) => {
  console.log(err);
  res.send(err);
};

const routeNotExist = (req, res, next) => {
  res.send(`${req.path} does not exist`);
};

app.use(errorHandler);
app.use(routeNotExist);

module.exports = app;
