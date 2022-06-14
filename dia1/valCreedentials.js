const mongoose = require("mongoose");

const esquemaCreedentials = new mongoose.Schema({
    address :{
        type: String,
        required: true
    },
    verified: Boolean,

    phone:{
        type: Number,
        validate : [
            function(phone)
            {              
                return phone.length >=9          
            },
            'Aqui'
            
        ],
        select: false
    },   
   
    email:{
        type: String,
        validate : [
            function(email)
            {
                return email.includes("@") 
            },
             'Recuerda de usar un @ en tu dirección'
        ],
        select: false
    }    
})

module.exports = mongoose.model("valCreedentials",esquemaCreedentials,"Creedentials");