const mongoose = require("mongoose");
const Int32 = require("mongoose-int32").loadType(mongoose);

const schema = mongoose.Schema({
    name: String,
    level: Int32,
    type: String,
    speed: Int32,
    img: String
})

module.exports = mongoose.model("Pokemons", schema)