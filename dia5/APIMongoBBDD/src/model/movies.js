let mongoose = require("mongoose");
const {Schema, model} = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title:String,
    actors:[String],
    writers:[String],
    directors:[String],
    releaseYear:Number,
    producer:String,

})

module.exports = model("Movie",MovieSchema,"Movie");