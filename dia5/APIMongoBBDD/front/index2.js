class Movie {
    constructor(title, releaseYear, producer, actors, writers, directors) {
        this.title = title;
        this.actors = actors;
        this.writers = writers;
        this.directors = directors;
        this.releaseYear = releaseYear;
        this.producer = producer;

    }
}

async function postMovie() {
    let movie = new Movie(
        document.getElementById("title").value,
        document.getElementById("releaseYear").value,
        document.getElementById("producer").value
    )
    console.log(movie)
    let url = "http://localhost:3000/movie/"

    if (validar(movie)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(movie),
            method: "POST"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }
                else {
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }
}

async function postActors() {

    let movie = {
        _id: document.getElementById("_id").value,
        actors: document.getElementById("formActors").value
    }
    console.log(movie)
    let url;
    if (_id) {
        url = `http://localhost:3000/movie/actor/?_id=${_id.value}`;
        console.log(url)
    } else {
        url = `http://localhost:3000/movieessional/`
    }


    if (validar(movie.actors)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(movie),
            method: "POST"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }
                else {
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }
}

async function postActors() {

    let movie = {
        _id: document.getElementById("_id").value,
        actors: document.getElementById("formActors").value
    }
    console.log(movie)
    let url;
    if (_id) {
        url = `http://localhost:3000/movie/actor/?_id=${_id.value}`;
        console.log(url)
    } else {
        url = `http://localhost:3000/movieessional/`
    }


    if (validar(movie.actors)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(movie),
            method: "POST"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }
                else {
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }
}

async function postWriters() {
    let movie = {
        _id: document.getElementById("_id").value,
        writers: document.getElementById("formWriters").value
    }
    console.log(movie)
    let url;
    if (_id) {
        url = `http://localhost:3000/movie/writer/?_id=${_id.value}`;
        console.log(url)
    } else {
        url = `http://localhost:3000/movieessional/`
    }


    if (validar(movie.writers)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(movie),
            method: "POST"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }
                else {
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }
}

async function postDirectors() {

    let movie = {
        _id: document.getElementById("_id").value,
        directors: document.getElementById("formDirectors").value
    }
    console.log(movie)
    let url;
    if (_id) {
        url = `http://localhost:3000/movie/director/?_id=${_id.value}`;
        console.log(url)
    } else {
        url = `http://localhost:3000/movieessional/`
    }


    if (validar(movie.directors)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8" },
            body: JSON.stringify(movie),
            method: "POST"
        }

        fetch(url, param)
            .then(function (data) {
                return data.json()
            })
            .then(function (result) {
                if (result.err) {
                    showToast("ERROR" + result.mensaje, "bg-danger")
                }
                else {
                    showToast("Usuario creado correctamente", "bg-success")
                    console.log(result);
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }
}
function output(result) {

    let resultado = "";
    let tabla = `<table>
                    <tr>  
                                    
                    <th>Titulo</th>
                    <th>Año de publicación</th>                   
                    <th>Productora</th>                  
                                 
                    </tr>
                `

    resultado = resultado + tabla;
    for (let i = 0; i < result.length; i++) {

        resultado += ` <tr>
                                
                                <td>${result[i].title}</td>
                                <td>${result[i].releaseYear}</td>   
                                <td>${result[i].producer}</td>                                                              
                               
                                
                                </tr>
                    `}
    document.getElementById("tablaName").innerHTML = resultado + `</table>`
}
function output2(result) {

    let resultado2 = "";
    let tabla = `<table>
                    <tr>           
                    <th>Actores</th>                  
                    </tr>
                `

    resultado2 = resultado2 + tabla;
    for (let valor in result) {
        resultado2 += `<div>   
        <tr>              
         <th><b>Nombre: </b></th>              
         <td>${result[valor]}</td>   
         </tr>           
         `

    }
    document.getElementById("tablaName").innerHTML = resultado2 + `</table>`
}
function output3(result) {

    let resultado3 = "";
    let tabla = `<table>
                    <tr>           
                    <th>Guionistas</th>                  
                    </tr>
                `

    resultado3 = resultado3 + tabla;
    for (let valor in result) {
        resultado3 += `<div>   
        <tr>              
         <th><b>Nombre: </b></th>              
         <td>${result[valor]}</td>   
         </tr>           
         `

    }
    document.getElementById("tablaName").innerHTML = resultado3 + `</table>`
}
function output4(result) {

    let resultado4 = "";
    let tabla = `<table>
                    <tr>           
                    <th>Directores</th>                  
                    </tr>
                `

    resultado4 = resultado4 + tabla;
    for (let valor in result) {
        resultado4 += `<div>   
        <tr>              
         <th><b>Nombre: </b></th>              
         <td>${result[valor]}</td>   
         </tr>           
         `

    }
    document.getElementById("tablaName").innerHTML = resultado4 + `</table>`
}

function getMovie() {
    let _id = document.getElementById("_id").value;
    let url;

    if (_id) {
        url = `http://localhost:3000/movie/?_id=${_id}`
        console.log(url)
    } else {
        url = `http://localhost:3000/movie/`
    }

    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
    }
    fetch(url, param)
        .then(function (data) {

            return data.json()
        })
        .then(function (result) {
            if (result.length > 0) {
                output(result);
            } else {
                if (!result.err) {
                    resultado2 = document.getElementById("tablaName")
                    resultado2.innerHTML = `<div>   
                            <tr>              
                                        <tr>      
                    <tr>              
                     <th><b>Titulo: </b></th>              
                     <td>${result.title}</td>   
                     </tr>           
                     <tr>              
                     <th><b>Año de producción: </b></th>              
                     <td>${result.releaseYear}</td>              
                     </tr>  
                     <tr>              
                     <th><b>Productora: </b></th>              
                     <td>${result.producer}</td>         
                     </tr>                              
                     </div>`

                } else {
                    showToast("Error" + result.mensaje, "bg-danger")
                }
            }

        })
        .catch(function (err) {
            console.log(err)
        })


}

function getActors() {
    let _id = document.getElementById("_id").value;
    let url;

    if (_id) {
        url = `http://localhost:3000/movie/actor/?_id=${_id}`
        console.log(url)
    } else {
        console.log("Introduce una id valida")
    }

    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
    }
    fetch(url, param)
        .then(function (data) {

            return data.json()
        })
        .then(function (result) {
            if (result.length > 0) {
                output2(result);

            } else {
                showToast("Error" + result.mensaje, "bg-danger")
            }
        })

        .catch(function (err) {
            console.log(err)
        })
}
function getWriters() {
    let _id = document.getElementById("_id").value;
    let url;

    if (_id) {
        url = `http://localhost:3000/movie/writer/?_id=${_id}`
        console.log(url)
    } else {
        console.log("Introduce una id valida")
    }

    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
    }
    fetch(url, param)
        .then(function (data) {

            return data.json()
        })
        .then(function (result) {
            if (result.length > 0) {
                output3(result);

            } else {
                showToast("Error" + result.mensaje, "bg-danger")
            }
        })

        .catch(function (err) {
            console.log(err)
        })
}
function getDirectors() {
    let _id = document.getElementById("_id").value;
    let url;

    if (_id) {
        url = `http://localhost:3000/movie/director/?_id=${_id}`
        console.log(url)
    } else {
        console.log("Introduce una id valida")
    }

    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
    }
    fetch(url, param)
        .then(function (data) {

            return data.json()
        })
        .then(function (result) {
            if (result.length > 0) {
                output4(result);

            } else {
                showToast("Error" + result.mensaje, "bg-danger")
            }
        })

        .catch(function (err) {
            console.log(err)
        })
}
function getProducer() {
    let _id = document.getElementById("_id").value;
    let url;

    if (_id) {
        url = `http://localhost:3000/movie/?_id=${_id}`
        console.log(url)
    } else {
        showToast("Error" + result.mensaje, "bg-danger")
    }

    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "GET"
    }
    fetch(url, param)
        .then(function (data) {

            return data.json()
        })
        .then(function (result) {
            if (result.length > 0) {
                showToast("Error" + result.mensaje, "bg-danger")
            } else {
                if (!result.err) {
                    resultado2 = document.getElementById("tablaName")
                    resultado2.innerHTML = `<div>   
                                <tr>              
                              
                         <th><b>Productora: </b></th>              
                         <td>${result.producer}</td>         
                         </tr>                              
                         </div>`

                } else {
                    showToast("Error" + result.mensaje, "bg-danger")
                }
            }

        })
        .catch(function (err) {
            console.log(err)
        })


}


function putMovie() {
    let _id = document.getElementById("_id").value;
    let url = `http://localhost:3000/movie/?_id=${_id}`;

    let input = {
        _id: document.getElementById("_id").value,
        title: document.getElementById("title").value,
        releaseYear: document.getElementById("releaseYear").value,     
        producer: document.getElementById("producer").value
       
    }

    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        body: JSON.stringify(input),
        method: "PUT"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (result.err) {
                showToast("ERROR" + result.mensaje, "bg-danger")
            }
            else {
                showToast("Usuario creado correctamente", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err) {
            console.log(err)
        })
}

function deleteMovie() {

    let _id = document.getElementById("_id").value;
    url = `http://localhost:3000/movie/?_id=${_id}`;
   
    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        method: "DELETE"
    }
    console.log(_id)
    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (result.err) {
                showToast("ERROR" + result.mensaje, "bg-danger")
            }
            else {
                showToast("Usuario eliminado", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err) {
            console.log(err)
        })
}

function deleteActors() {

    let _id = document.getElementById("_id").value;
    url = `http://localhost:3000/movie/actor/?_id=${_id}`;
    let actorDelete = {
        actors: document.getElementById("formActors").value
     }
    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        body: JSON.stringify(actorDelete),
        method: "DELETE"
    }
    console.log(_id)
    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (result.err) {
                showToast("ERROR" + result.mensaje, "bg-danger")
            }
            else {
                showToast("Usuario eliminado", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err) {
            console.log(err)
        })
}

function deleteWriters() {

    let _id = document.getElementById("_id").value;
    url = `http://localhost:3000/movie/writer/?_id=${_id}`;
    let writerDelete = {
        writers: document.getElementById("formWriters").value
     }
    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        body: JSON.stringify(writerDelete),
        method: "DELETE"
    }
    console.log(_id)
    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (result.err) {
                showToast("ERROR" + result.mensaje, "bg-danger")
            }
            else {
                showToast("Usuario eliminado", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err) {
            console.log(err)
        })
}
function deleteDirectors() {

    let _id = document.getElementById("_id").value;
    url = `http://localhost:3000/movie/director/?_id=${_id}`;
    let directorDelete = {
        directors: document.getElementById("formDirectors").value
     }
    let param =
    {
        headers: { "Content-type": "application/json; charset = UTF-8" },
        body: JSON.stringify(directorDelete),
        method: "DELETE"
    }
    console.log(_id)
    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {
            if (result.err) {
                showToast("ERROR" + result.mensaje, "bg-danger")
            }
            else {
                showToast("Usuario eliminado", "bg-success")
                console.log(result);
            }
        })
        .catch(function (err) {
            console.log(err)
        })
}
function validar(movie) {
    resultado = false
    if (movie.title == "" || movie.title == "null") {
        showToast("AVISO: Campo title vacío", "bg-warning");
    } else if (movie.releaseYear == "" || movie.releaseYear == "null") {
        showToast("AVISO: Campo releaseYear vacío", "bg-warning")
    } else if (movie.age == "" || movie.age == "null") {
        showToast("AVISO: Campo age vacío", "bg-warning");
    } else if (movie.producer == "" || movie.producer == "null") {
        showToast("AVISO: Campo producer vacío", "bg-warning");
    } else if (movie.actors == "" || movie.actors == "null") {
        showToast("AVISO: Campo producer vacío", "bg-warning");
    } else if (movie.writers == "" || movie.writers == "null") {
        showToast("AVISO: Campo producer vacío", "bg-warning");
    } else if (movie.directors == "" || movie.directors == "null") {
        showToast("AVISO: Campo producer vacío", "bg-warning");
    } else {
        resultado = true;
    } return resultado;
}

function showToast(message, color) {

    document.getElementById("toastText").innerText = message;
    let toastElement = document.getElementById('toast')

    toastElement.className = toastElement.className.replace("bg-warning").replace("bg-danger") + " " + color;
    let toast = new bootstrap.Toast(toastElement)
    toast.show()
}