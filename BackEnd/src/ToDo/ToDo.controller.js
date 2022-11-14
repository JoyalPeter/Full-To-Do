const { getData, addData, updateData, deleteData } = require("./ToDo.service");

const disp = async (req, res, next) => {
  const result = await getData();
  res.send(result);
};

const add = async (req, res, next) => {
  const data = req.body.name;
  const result = await addData(data);
  res.send(result);
};

const updateList = async (req, res, next) => {
  const name = req.body.name;
  const id = req.body.id;
  const result = await updateData(id, name);
  res.send(result);
};

const deleteItem = async (req, res, next) => {
  const id = req.body.id;
  const result = await deleteData(id);
  res.send(result);
};

module.exports = {
  disp,
  add,
  updateList,
  deleteItem,
};
