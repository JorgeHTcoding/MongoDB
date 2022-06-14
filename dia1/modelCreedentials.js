let mongoose = require("mongoose");
let Creedentials = require("./esquemaCreedentials")

mongoose.connect('mongodb+srv://combowombo:wombo321@clustermongo.ar5myhr.mongodb.net/codenotch',
                {useNewUrlParser: false , useUnifiedTopology: false})

let CreedentialsDocument = new Creedentials({
    address : "c/ Delapiruleta nº 5",
    phone : 666696969,
    email : "manoliladelapamela@mediokilo.com"
});

CreedentialsDocument.save()
.then((data) =>
{
    console.log(data);    
})
.catch((err) =>
{
    console.log(err)
})
