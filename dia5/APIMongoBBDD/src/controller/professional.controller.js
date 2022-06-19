const { response } = require("express");
const connection = require("../database")
const Movie = require("../model/movies")
const Professional = require ("../model/professional")


function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);
}

async function getProfessional(request, response) {
    if (request.query._id == null) {
        try {
            let profDown = await Professional.find({});
            console.log("Profesionales descargados");
            response.send(profDown);
        }
        catch (err) {
            console.log(err);
            process.exit(-1);
        }
    }
    else {
        try {
            let profDown = await Professional.findById(request.query._id);
            console.log("Profesional descargado")
            response.send(profDown)
        }
        catch (err) {
            console.log(err)
            process.exit(-1);
        }
    }
}

async function postProfessional(request, response) {
    let prof = new Professional({
        name: request.body.name,
        surname: request.body.surname,
        age: request.body.age,
        isRetired: request.body.isRetired,
        oscarsNumber: request.body.oscarsNumber
    })
    try {
        let profUpload = await prof.save();
        console.log("El profesional se ha subido con exito")
        response.send(profUpload)
    }
    catch (err) {
        console.log(err);

    }
}


async function putProfessional(request, response) {
    if (request.query._id != null) {
        try {
            let proUpdate = await Professional.updateOne({_id:request.query._id},{name: request.body.name, surname: request.body.surname, age: request.body.age,
                 isRetired: request.body.isRetired, oscarsNumber: request.body.oscarsNumber});
            console.log("El profesional se ha actualizado con éxito")
            response.send(proUpdate)
        }
        catch (err) {
            console.log(err);

        }
    } else {
        console.log("Profesional no válido")
    }
}

async function deleteProfessional(request, response) {
    if (request.query._id != null) {
        try {
            let profDelOne = await Professional.deleteOne({_id:request.query._id});
            console.log("El profesional se ha eliminado con éxito")
            response.send(profDelOne)
        }

        catch (err) {
            console.log(err);
        }

    } else {
     console.log("Introduce una ID válida")
    }
}



module.exports = {getStart, getProfessional,postProfessional,putProfessional,deleteProfessional};
