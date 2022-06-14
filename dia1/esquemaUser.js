const mongoose = require("mongoose");
const { stringify } = require("querystring");

const UserSchema = new mongoose.Schema({
    login : String,
    password : String
})

module.exports = mongoose.model("User",UserSchema,"User")