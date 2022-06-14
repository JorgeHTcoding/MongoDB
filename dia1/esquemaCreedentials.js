const mongoose = require("mongoose");
const { stringify } = require("querystring");

const CreedentialsSchema = new mongoose.Schema({
    address : String,
    phone : Number,
    email : String
})

module.exports = mongoose.model("Creedentials",CreedentialsSchema,"Creedentials")