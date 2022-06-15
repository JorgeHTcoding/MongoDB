let mongoose = require("mongoose");
let Photos = require("./esquemaPhotos");

mongoose.connect('mongodb+srv://combowombo:wombo321@clustermongo.ar5myhr.mongodb.net/photos',
    { useNewUrlParser: false, useUnifiedTopology: false })



async function imgUpload(userName, imgUrl, title, description) {
    let photo = new Photos({
        userName: userName,
        imgUrl: imgUrl,
        title: title,
        description: description
    })

    try {
        let imgSave = await photo.save();
        console.log("La foto se ha subido")
        console.log(imgSave)
    }
    catch (err) {
        console.log(err)
    }
}


async function imgDownload(userName) {
  
    try {
        let imgDown = await Photos.find({userName: userName});
        console.log("Esta es la foto que buscabas")
        console.log(imgDown)
    }
    catch (err) {
        console.log(err)
    }
}

async function imgUpdate(title1,description1) {
  
    try {
        let imgUp = await Photos.updateOne({title : title1},{$set:{description : description1}});
        console.log("Comentario actualizado")
        console.log(imgUp)
    }
    catch (err) {
        console.log(err)
    }
}

async function imgDeleteOne(userName,title) {
  
    try {
        let imgDel = await Photos.deleteOne({$and: [{userName : userName}, {title:title}]});
        console.log("Foto eliminada")
        console.log(imgDel)
    }
    catch (err) {
        console.log(err)
    }
}


async function imgDeleteAll(userName) {
  
    try {
        let imgDelAll = await Photos.deleteMany({userName : userName});
        console.log("Todas las fotos eliminada")
        console.log(imgDelAll)
    }
    catch (err) {
        console.log(err)
    }
}

// imgUpload("PolvitoUruguayoLover","https://www.cocina-uruguaya.com/base/stock/Recipe/24-image/24-image_web.jpg","Polvazo Uruguayo","Es un postre hecho con mucho dulce de leche, merengue y galleta")
// imgDownload("ComboWombo")
// imgUpdate("Polvazo Uruguayo" , "El polvito uruguayo es una mentira, es una construcción macabra de tu mente enferma")
imgDeleteOne("PolvitoUruguayoLover", "Polvazo Uruguayo")
