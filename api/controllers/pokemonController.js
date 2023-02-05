const Pokemon = require("../models/pokemon");
const handleError  = require("./errorController");

const getAll = async (req, res) => {
  Pokemon.find({})
    .then(pokemons => res.status(200).send({pokemons}))
    .catch(() => handleError(404, 'No se han encontrado pokémons', res))
};

const findId = async (req, res) => {
  Pokemon.findOne({_id: req.params.id})
    .then(pokemon => res.status(200).send({pokemon}))
    .catch(() => handleError(404, 'No se han encontrado pokémons', res))
};

module.exports = {
  getAll,
  findId,
};
