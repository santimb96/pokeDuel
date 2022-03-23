const mongoose = require("mongoose");
const Int32 = require("mongoose-int32").loadType(mongoose);

const schema = new mongoose.Schema({
    _id: Int32,
    name: String,
    level: Int32,
    type: String,
    speed: Int32,
    img: String,
    img_game: String
})

module.exports = mongoose.model("Pokemons", schema);