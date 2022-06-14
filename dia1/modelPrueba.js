let mongoose = require("mongoose");
let User = require("./valUser")
let Profile = require("./valProfile")
let Creedentials = require("./valCreedentials")

mongoose.connect('mongodb+srv://combowombo:wombo321@clustermongo.ar5myhr.mongodb.net/codenotch',
                {useNewUrlParser: false , useUnifiedTopology: false})

let userDocument = new User({
    login :"Mano",
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

    // let profileDocument = new Profile({
    //     name :"Juana",
    //     surname: "Banana",
    //     dateOfBirth: new Date("1975-02-02"),
    //     comments: "La",
    //     rol: "Comedora de plátanos profesional"
    // });
    
    //     profileDocument.save()
    //     .then((data) =>
    //     {
    //         console.log(data);    
    //     })
    //     .catch((err) =>
    //     {
    //         console.log(err)
    //     })

        // let creedentialsDocument = new Creedentials({
        //     address :"c/ Narnia s/n",
        //     phone: 26661,
        //     email: "juana@bananamail.com",
         
        // });
        
        //     creedentialsDocument.save()
        //     .then((data) =>
        //     {
        //         console.log(data);    
        //     })
        //     .catch((err) =>
        //     {
        //         console.log(err)
        //     })
    