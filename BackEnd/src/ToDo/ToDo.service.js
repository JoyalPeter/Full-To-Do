const knexInstance = require("../database/connection");

const getData = async () => {
  const result = await knexInstance("todo").select("*");
  return result;
};

const addData = async (itemName) => {
  await knexInstance("todo").insert({ names: itemName });
  const result = getData();
  return result;
};

const updateData = async (id, name) => {
  await knexInstance("todo").where("id", id).update({ names: name });
  const result = getData();
  return result;
};

const deleteData = async (id) => {
  await knexInstance("todo").where({ id: id }).del();
  const result = getData();
  return result;
};

module.exports = {
  getData,
  addData,
  updateData,
  deleteData,
};
