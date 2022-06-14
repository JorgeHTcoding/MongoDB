const mongoose = require("mongoose");
const { stringify } = require("querystring");

const ProfileSchema = new mongoose.Schema({
    name : String,
    surname : String,
    dateOfBirth : Date,
    comments : String,
    rol: String
})

module.exports = mongoose.model("Profile",ProfileSchema,"Profile")