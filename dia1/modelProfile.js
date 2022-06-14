let mongoose = require("mongoose");
let Profile = require("./esquemaProfile")

mongoose.connect('mongodb+srv://combowombo:wombo321@clustermongo.ar5myhr.mongodb.net/codenotch',
                {useNewUrlParser: false , useUnifiedTopology: false})

let ProfileDocument = new Profile({
    name :"Manoli",
    surname : "Perez",
    dateOfBirth : 1992-02-02,
    comments : "La de la pamela amarillo pollo",
    rol: "supermanoli"
});

ProfileDocument.save()
.then((data) =>
{
    console.log(data);    
})
.catch((err) =>
{
    console.log(err)
})