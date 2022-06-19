let mongoose = require("mongoose");
const {Schema, model} = require("mongoose");

const ProfessionalSchema = new mongoose.Schema({
    name:String,
    surname:String,
    age:Number,
    isRetired:Boolean,
    oscarsNumber:Number    
})

module.exports = model("Professional",ProfessionalSchema,"Professional");