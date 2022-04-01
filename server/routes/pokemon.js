const express = require("express");
const pokemonController = require("../controllers/pokemonController");

const router = express.Router();

router
  .get("/", pokemonController.getAll)
  .get("/:id", pokemonController.findId)

module.exports = router;
