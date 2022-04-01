const Pokemon = require("../models/Pokemon");
const detectedError  = require("./errorController");

const getAll = async (req, res) => {
  try {
    const pokemons = await Pokemon.find({});
    res.status(200).send({pokemons});    
  } catch (err) {
    console.error(err);
  }
};

const findId = async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ _id: req.params.id });
    return res.status(200).send({ pokemon });
  } catch (err) {
    detectedError(err, res);
  }
};

module.exports = {
  getAll,
  findId,
};
