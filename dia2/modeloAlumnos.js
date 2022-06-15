let mongoose = require("mongoose");
let Students = require("./arbolesAlumnos");

mongoose.connect('mongodb+srv://combowombo:wombo321@clustermongo.ar5myhr.mongodb.net/alumnos',
    { useNewUrlParser: false, useUnifiedTopology: false })



async function StudentsUpload(firstName, lastName, marks) { 
    let student = new Students({
        firstName: firstName,
        lastName: lastName,
        marks : marks
      
    })

    try {
        let studentSave = await student.save();
        console.log("La foto se ha subido")
        console.log(studentSave)
    }
    catch (err) {
        console.log(err)
    }
}

// StudentsUpload(
//     "Ana",
//     "Perez",
//     [{date: 2022-08-05, mark: 10,
//     subject:{title: "Fundamentos", teacher: [{firstName: "Jose",lastName: "Guerrero"}]}}]
// )

async function studentNotas(firstName) {
  
    try {
        let notas = await Students.find({firstName : firstName},{_id:0, marks:1, });       
        console.log("Todas las notas del alumno")      
             
          for(let valor in notas){
            console.log(notas[valor].marks[0].mark)
          }
    }
    catch (err) {
        console.log(err)
    }
}

studentNotas("Ana")