let mongoose = require("mongoose");
let User = require("./esquemaUser")


mongoose.connect('mongodb+srv://combowombo:wombo321@clustermongo.ar5myhr.mongodb.net/codenotch',
                {useNewUrlParser: false , useUnifiedTopology: false})

let userDocument = new User({
    login :"ManoliHalfThePound",
    password : "mediokilo123"
});

    userDocument.save()
    .then((data) =>
    {
        console.log(data);    
    })
    .catch((err) =>
    {
        console.log(err)
    })





