class Professional {
    constructor(name, surname, age, isRetired, oscarsNumber) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isRetired = isRetired;
        this.oscarsNumber = oscarsNumber;
  
    }
}

async function postProfessional() {
    let prof = new Professional(
        document.getElementById("name").value,
        document.getElementById("surname").value,
        document.getElementById("age").value,
        document.getElementById("isRetired").value,
        document.getElementById("oscarsNumber").value,
    )

    let url = "http://localhost:3000/professional/"

    if (validar(prof)) {
        let param =
        {
            headers: { "Content-type": "application/json; charset = UTF-8"},
            body: JSON.stringify(prof),
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
                                    
                    <th>Nombre</th>
                    <th>Apellido</th>                   
                    <th>Edad</th>
                    <th>¿Retirado?</th>
                    <th>Oscars</th>   
                                 
                    </tr>
                `

    resultado = resultado + tabla;
    for (let i = 0; i < result.length; i++) {

        resultado += ` <tr>
                                
                                <td>${result[i].name}</td>
                                <td>${result[i].surname}</td>   
                                <td>${result[i].age}</td>  
                                <td>${result[i].isRetired}</td>                               
                                <td>${result[i].oscarsNumber}</td>
                                
                               
                                
                                </tr>
                    `}
    document.getElementById("tablaName").innerHTML = resultado + `</table>`
}

function getProfessional() {
    let _id = document.getElementById("_id").value;
    let url;

    if(_id){
        url = `http://localhost:3000/professional/?_id=${_id}`
        console.log(url)
    } else{
        url = `http://localhost:3000/professional/`
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
                if(result.length > 0 ){
                    output(result);
                }else{
                    if (!result.err) {
                        resultado2 = document.getElementById("tablaName")                       
                            resultado2.innerHTML = `<div>   
                            <tr>              
                                        <tr>      
                    <tr>              
                     <th><b>Nombre: </b></th>              
                     <td>${result.name}</td>   
                     </tr>           
                     <tr>              
                     <th><b>Apellido: </b></th>              
                     <td>${result.surname}</td>              
                     </tr>  
                     <tr>              
                     <th><b>Año de ingreso: </b></th>              
                     <td>${result.age}</td>         
                     </tr>  
                     <tr>              
                     <td><b>Año de ingreso: </b></td>              
                     <th>${result.isRetired}</th>         
                     </tr>  
                     <tr>              
                     <td><b>Año de ingreso: </b></td>              
                     <th>${result.oscarsNumber}</th>         
                     </tr>  
                     <tr>            
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

function putProfessional() {
    let _id = document.getElementById("_id").value;
    let url = `http://localhost:3000/professional/?_id=${_id}`;

    let input = {
        _id: document.getElementById("_id").value,
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        age: document.getElementById("age").value,
        isRetired: document.getElementById("isRetired").value,
        oscarsNumber: document.getElementById("oscarsNumber").value
        
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

function deleteProfessional() {

    let _id =  document.getElementById("_id").value ;
    url = `http://localhost:3000/professional/?_id=${_id}`;

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


function validar(prof) {
    resultado = false
    if (prof.name == "" || prof.name == "null") {
        showToast("AVISO: Campo name vacío", "bg-warning");
    } else if (prof.surname == "" || prof.surname == "null") {
        showToast("AVISO: Campo surname vacío", "bg-warning")
    } else if (prof.age == "" || prof.age == "null") {
        showToast("AVISO: Campo age vacío", "bg-warning");
    } else if (prof.isRetired == "" || prof.isRetired == "null") {
        showToast("AVISO: Campo isRetired vacío", "bg-warning");
    } else if (prof.oscarsNumber == "" || prof.oscarsNumber == "null") {
        showToast("AVISO: Campo age vacío", "bg-warning");
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