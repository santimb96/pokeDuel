const UserStat = require("../models/userStat.js");
const handleError = require("./errorController");

const getAll = (req, res) => {
  UserStat.find({})
    .then((userStat) => res.status(200).send({ userStat }))
    .catch(() => handleError(404, "No se han encontrado pokémons", res));
};

const findId = async (req, res) => {
  UserStat.findOne({ _id: req.params.id })
    .populate("user")
    .then((userStat) => res.status(200).send({ userStat }))
    .catch(() => handleError(404, "No se han encontrado pokémons", res));
};

const create = async (req, res) => {
  const userStatToCreate = req.body;

  const newUserStat = new UserStat({
    user: userStatToCreate.user,
    timePlayed: new Date().setHours(0, 0, 0, 0),
    round: userStatToCreate.round,
    team: userStatToCreate.team,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  UserStat.create(newUserStat)
    .then((userStat) => res.status(201).send({ userStat }))
    .catch(() => handleError(404, "No se ha podido crear el usuario", res));
};

const updateById = async (req, res) => {
  const userToUpdate = req.body;

  UserStat.findOneAndUpdate({ _id: req.params.id }, userToUpdate)
    .then(() => res.status(201).send({ userToUpdate }))
    .catch(() =>
      handleError(404, "No se ha podido actualizar el usuario", res)
    );
};

const deleteById = async (req, res) => {
  UserStat.findOneAndDelete({ _id: req.params.id })
    .then((userStat) => res.status(201).send({ userStat }))
    .catch(() => handleError(404, "No se ha podido eliminar el usuario", res));
};

module.exports = {
  getAll,
  findId,
  create,
  updateById,
  deleteById,
};
