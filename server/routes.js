const express = require("express")
const Pokemons = require("./models/Pokemons")
const router = express.Router();

router.get("/pokemons", async (req, res) => {
    const pokemons = await Pokemons.find();
    //console.log(pokemons);
    res.send(pokemons);
});

module.exports = router;