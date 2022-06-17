const { response } = require("express");
const connection = require("../database")
const Photo = require("../model/photo")



function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);
}

async function getPhotos(request, response) {
    if (request.query.photo_id == null) {
        try {
            let photoDown = await Photo.find({});
            console.log("Foto descargada");
            response.send(photoDown);
        }
        catch (err) {
            console.log(err);
            process.exit(-1);
        }
    }
    else {
        try {
            let photoDown = await Photo.findById(request.query.photo_id);
            console.log("Foto descargada")
            response.send(photoDown)
        }
        catch (err) {
            console.log(err)
            process.exit(-1);
        }
    }
}

async function postPhotos(request, response) {

    let photo = new Photo({
        userName: request.body.userName,
        imgUrl: request.body.imgUrl,
        title: request.body.title,
        description: request.body.description
    })
    try {
        let photoUp = await photo.save();
        console.log("La foto se ha subido con éxito")
        response.send(photoUp)
    }
    catch (err) {
        console.log(err);

    }
}


async function putPhotos(request, response) {
    if (request.body.title != null) {
        try {
            let photoUpdate = await Photo.updateOne({title: request.body.title },{description: request.body.description});
            console.log("La foto se ha actualizado con éxito")
            response.send(photoUpdate)
        }
        catch (err) {
            console.log(err);

        }
    } else {
        console.log("Title no válido")
    }
}

async function deletePhotos(request, response) {
    if (request.body.userName != null && request.body.title != null) {
        try {
            let photoDelOne = await Photo.deleteOne({ $and: [{ userName: request.body.userName }, { title: request.body.title }] });
            console.log("La foto se ha eliminado con éxito")
            response.send(photoDelOne)
        }

        catch (err) {
            console.log(err);
        }

    } else {
        try {
            let photoDelMany = await Photo.deleteMany({ userName: request.body.userName });
            console.log("Las fotos se han eliminado con éxito")
            response.send(photoDelMany)
        }

        catch (err) {
            console.log(err);
        }

    }
}

async function deletePhotos(request, response) {
    if (request.body.userName != null && request.body.title != null) {
        try {
            let photoDelOne = await Photo.deleteOne({ $and: [{ userName: request.body.userName }, { title: request.body.title }] });
            console.log("La foto se ha eliminado con éxito")
            response.send(photoDelOne)
        }

        catch (err) {
            console.log(err);
        }

    } else if (request.body.userName != null) {
        try {
            let photoDelMany = await Photo.deleteMany({ userName: request.body.userName });
            console.log("Las fotos se han eliminado con éxito")
            response.send(photoDelMany)
        }

        catch (err) {
            console.log(err);
        }
    }
}



module.exports = { getStart, postPhotos, getPhotos, putPhotos, deletePhotos };
