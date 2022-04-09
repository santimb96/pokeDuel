const mongoose = require("mongoose");

const UserStatSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    timePlayed: {
      type: Date,
      required: true
    },
    round: {
        type: Number,
        required: true
    },
    team: {
        type: Array,
        required: true, 
    },
    createdAt: {
        type: Date,
        required: true
    },
    updatedAt: {
        type: Date,
        required: true
    }
})

const UserStat = mongoose.model("UserStat", UserStatSchema, "userStats");
module.exports = UserStat;