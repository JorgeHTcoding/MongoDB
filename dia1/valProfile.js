const mongoose = require("mongoose");

const esquemaProfile = new mongoose.Schema({
    name :{
        type: String,
        required: true
    },
    verified: Boolean,

    surname :{
        type: String,
        required: true
    },
    verified: Boolean,

    dateOfBirth:{
        type: Date,
        type: String,
        required: true
    },
    verified: Boolean,
    
      comments :{
        type: String,
        required: true
    },
    verified: Boolean,
      rol :{
        type: String,
        required: true
    },
    verified: Boolean
})

esquemaProfile.pre('save', function(next){
    console.log("Middleware de entrada");
    if(this.comments.length > 5 ) 
    {
        console.log("Comentario guardado")
    }else{
    console.log("Comentario muy corto, debe contener al menos 30 caracteres")   
    } 
});

module.exports = mongoose.model("valProfile",esquemaProfile,"Profile");