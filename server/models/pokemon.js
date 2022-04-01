const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
    pokedexNumber: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    speed: {
        type: Number, 
        required: true
    },
    img : {
        type: String
    },
    
    imgGame : {
        type: String
    }
})

const Pokemon = mongoose.model("Pokemon", PokemonSchema, "pokemons");
module.exports = Pokemon;