const { response } = require("express");
const { isObjectIdOrHexString } = require("mongoose");
const connection = require("../database")
const Movie = require("../model/movies")



function getStart(request, response) {
    let respuesta = { error: true, codigo: 200, mensaje: 'Punto de inicio' };
    response.send(respuesta);
}

async function getMovie(request, response) {
    if (request.query._id == null) {
        try {
            let movieDown = await Movie.find({});
            console.log("Películas descargadas");
            response.send(movieDown);
        }
        catch (err) {
            console.log(err);
            process.exit(-1);
        }
    }
    else {
        try {
            let movieDown = await Movie.findById(request.query._id);
            console.log("Película descargada")
            response.send(movieDown)
        }
        catch (err) {
            console.log(err)
            process.exit(-1);
        }
    }
}

async function getActores(request, response) {
    if (request.query._id != null) {
        try {
            let actorSearch = await Movie.findById(request.query._id);
            console.log("Película descargada")
            console.log(actorSearch.actors)
            response.send(actorSearch.actors)
        }
        catch (err) {
            console.log(err)
            process.exit(-1);
        }
    } else {
        console.log("Introduce un id valido")
    }
}


async function getGuionistas(request, response) {
    if (request.query._id != null) {
        try {
            let writerSearch = await Movie.findById(request.query._id);
            console.log("Película descargada")
            console.log(writerSearch.writers)
            response.send(writerSearch.writers)
        }
        catch (err) {
            console.log(err)
            process.exit(-1);
        }
    } else {
        console.log("Introduce un id valido")
    }
}

async function getDirectores(request, response) {
    if (request.query._id != null) {
        try {
            let directorSearch = await Movie.findById(request.query._id);
            console.log("Película descargada")
            console.log(directorSearch.directors)
            response.send(directorSearch.directors)
        }
        catch (err) {
            console.log(err)
            process.exit(-1);
        }
    } else {
        console.log("Introduce un id valido")
    }
}


async function getProducer(request, response) {
    if (request.query._id != null) {
        try {
            let producerSearch = await Movie.findById(request.query._id);
            console.log("Productora descargada")
            console.log(producerSearch.producer)
            response.send(producerSearch.producer)
        }
        catch (err) {
            console.log(err)
            process.exit(-1);
        }
    } else {
        console.log("Introduce un id valido")
    }
}



async function postMovie(request, response) {
    let movie = new Movie({
        title: request.body.title,
        actors: [],
        writers: [],
        directors: [],
        releaseYear: request.body.releaseYear,
        producer: request.body.producer

    })
    try {
        let fullMovie = await movie.save();
        console.log("La película se ha subido con exito")
        response.send(fullMovie)
    }
    catch (err) {
        console.log(err);

    }
}

async function postActors(request, response) {
    try {
        let movieActors = await Movie.updateOne({ "_id": request.query._id }, { $push: { actors: request.body.actors } });
        console.log("El actor se ha subido con exito")
        response.send(movieActors)
    }
    catch (err) {
        console.log(err);

    }
}
async function postWriters(request, response) {
    try {
        let movieWriters = await Movie.updateOne({ "_id": request.query._id }, { $push: { writers: request.body.writers } });
        console.log("El guionista se ha subido con exito")
        response.send(movieWriters)
    }
    catch (err) {
        console.log(err);

    }
}
async function postDirectors(request, response) {
    try {
        let movieDirectors = await Movie.updateOne({ "_id": request.query._id }, { $push: { directors: request.body.directors } });
        console.log("El director se ha subido con exito")
        response.send(movieDirectors)
    }
    catch (err) {
        console.log(err);

    }
}


async function putMovie(request, response) {
    if (request.query._id != null) {
        try {
            let movieUpdate = await Movie.updateOne({ _id: request.query._id }, { title: request.body.title, releaseYear: request.body.releaseYear, producer: request.body.producer });
            console.log("La película se ha actualizado con éxito")
            response.send(movieUpdate)
        }
        catch (err) {
            console.log(err);

        }
    } else {
        console.log("Profesional no válido")
    }
}

async function deleteMovie(request, response) {
    if (request.query._id != null) {
        try {
            let movieDelete = await Movie.deleteOne({ _id: request.query._id });
            console.log("La película se ha eliminado con éxito")
            response.send(movieDelete)
        }

        catch (err) {
            console.log(err);
        }

    } else {
        console.log("Introduce una ID válida")
    }
}

async function deleteActor(request, response) {
    if (request.query._id != null) {
        try {
            let deleteActor = await Movie.updateOne({ "_id": request.query._id }, { $pull: { actors: request.body.actors } });
            console.log(request.body.actors)
            console.log("El actor se ha eliminado con éxito")
            response.send(deleteActor)
        }

        catch (err) {
            console.log(err);
        }

    } else {
        console.log("Introduce una ID válida")
    }
}

async function deleteWriter(request, response) {
    if (request.query._id != null) {
        try {
            let deleteWriter = await Movie.updateOne({ "_id": request.query._id }, { $pull: { writers: request.body.writers } });
            console.log("El guionista se ha eliminado con éxito")
            response.send(deleteWriter)
        }

        catch (err) {
            console.log(err);
        }

    } else {
        console.log("Introduce una ID válida")
    }
}

async function deleteDirector(request, response) {
    if (request.query._id != null) {
        try {
            let deleteDirector = await Movie.updateOne({ "_id": request.query._id }, { $pull: { directors: request.body.directors } });
            console.log("El director se ha eliminado con éxito")
            response.send(deleteDirector)
        }

        catch (err) {
            console.log(err);
        }

    } else {
        console.log("Introduce una ID válida")
    }
}



module.exports = { getStart, getMovie, postMovie, postActors, postWriters, postDirectors, putMovie,
 deleteMovie, deleteActor, deleteWriter, deleteDirector, getActores, getGuionistas, getDirectores, getProducer};