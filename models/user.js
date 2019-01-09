const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    age: Number,
    weight: Number,
    bodypart: [{
        type: Schema.Types.ObjectId,
        ref: "BodyArea"
    }]
});

module.exports = mongoose.model("User", User)