const mongoose = require("mongoose");

const esquemaUser = new mongoose.Schema({
    password :{
        type: String,
        validate: [
            function(password)
            {
                return password.length >=8
            },
            'La contraseña debe contener 8 o más caracteres'
        ],
        select: false
    }
})

esquemaUser.pre('save', function(next){
    console.log("Middleware de entrada");
    if(this.login != null) 
    {
        console.log("Login captado")
    }else{
    console.log("El login debe contener más de 5 caracteres")   
    } 
});

module.exports = mongoose.model("valUser",esquemaUser,"User");