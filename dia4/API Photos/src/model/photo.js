const {Schema, model} = require("mongoose");

const PhotoSchema = new Schema(
        {
      
            userName: String,
            imgUrl: String,
            title: String,
            description: String
        
        })  

module.exports = model("Photo",PhotoSchema,"Photo");