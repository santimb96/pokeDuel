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
    type: {
        type: String,
        required: true
    },
    speed: {
        type: Number, 
        required: true
    },
    img3d : {
        type: String
    },
    
    imgSvg : {
        type: String
    },
    
    imgFront : {
        type: String
    },
    
    imgBack : {
        type: String
    }
})

const Pokemon = mongoose.model("Pokemon", PokemonSchema, "pokemons");
module.exports = Pokemon;