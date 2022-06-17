let mongoose = require("mongoose");
let Marks = require("./arbolAlumnos");

mongoose.connect('mongodb+srv://combowombo:wombo321@clustermongo.ar5myhr.mongodb.net/retosdia3',
    { useNewUrlParser: false, useUnifiedTopology: false })


async function MarksUpload(date,mark,student_first_name,student_last_name,group_name,subject_name,teachers) { 
    let nota = new Marks({      
       date: date,
       mark: mark,
       student_first_name: student_first_name,
       student_last_name: student_last_name,
       group_name: group_name,
       subject_name: subject_name,
       teachers:teachers
      
    })

    try {
        let markUp = await nota.save();
        console.log("La nota se ha subido con éxito")
        console.log(markUp)
    }
    catch (err) {
        console.log(err)
    }
}

// MarksUpload(new Date(2019,08,12),9,"Jorge","Holgado","Slytherin","Defensa contra las artes oscuras",
// [{teacher_first_name: "Remus", teacher_last_name: "Lupin"},{teacher_first_name: "Sirius", teacher_last_name: "Black"}])
// MarksUpload(new Date(2019,08,12),10,"Alvaro","Sanchez","Ravenclaw","Pociones",
// [{teacher_first_name: "Severus", teacher_last_name: "Snape"},{teacher_first_name: "Nicolas", teacher_last_name: "Flamel"}])
// MarksUpload(new Date(2013,07,11),8,"Ana","Perez","Hufflepuff","Cuidado de criaturas mágicas",
// [{teacher_first_name: "Rubeous", teacher_last_name: "Hagrid"},{teacher_first_name: "Newt", teacher_last_name: "Scammander"}])
// MarksUpload(new Date(2013,07,11),3,"Manuel","Piris","Gryffindor","Quidditch",
// [{teacher_first_name: "Helga", teacher_last_name: "Hawkeye"},{teacher_first_name: "Ginny", teacher_last_name: "Weasly"}])
// MarksUpload(new Date(2013,07,11),7,"Javier","Garrido","Hufflepuff","Adivinación",
// [{teacher_first_name: "Sybill", teacher_last_name: "Trekawney"},{teacher_first_name: "Luna", teacher_last_name: "Lovegood"}])
// MarksUpload(new Date(2013,07,11),6,"Roberto","Durden","Gryffindor","Encantamientos",
// [{teacher_first_name: "Minerva", teacher_last_name: "McGonagall"},{teacher_first_name: "Fillius", teacher_last_name: "Flitwick"}])
// MarksUpload(new Date(2019,08,12),10,"Cherry","Reynoso","Slytherin","Herboristería",
// [{teacher_first_name: "Pomona", teacher_last_name: "Sprout"},{teacher_first_name: "Neville", teacher_last_name: "Longbottom"}])
// MarksUpload(new Date(2019,08,12),9,"Humphrey","Boggart","Hufflepuff","Defensa contra las artes oscuras",
// [{teacher_first_name: "Remus", teacher_last_name: "Lupin"},{teacher_first_name: "Sirius", teacher_last_name: "Black"}])
// MarksUpload(new Date(2019,08,12),8,"Guillermo","Martin","Slytherin","Pociones",
// [{teacher_first_name: "Severus", teacher_last_name: "Snape"},{teacher_first_name: "Nicolas", teacher_last_name: "Flamel"}])
// MarksUpload(new Date(2013,07,11),9,"Victor","Rodriguez","Hufflepuff","Hechizos",
// [{teacher_first_name: "Minerva", teacher_last_name: "McGonagall"},{teacher_first_name: "Newt", teacher_last_name: "Scammander"}])



// async function notaMedia(subject_name) {
//     try {
//         let notas = await       
//        Marks.aggregate(
//             [{$match:{ subject_name:subject_name}},
//                 {  
//                     $group:{ _id: "$subject_name", "media": { $avg: "$mark"} }
//                 } 
//             ]
//         );       
//         console.log("Todas las notas del alumno")    
//         console.log(notas) 
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// async function totalAlumnos() {
//     try {
//         let total = await       
//        Marks.aggregate(
//             [
//                 {  
//                     $count: "_id "
//                 } 
//             ]
//         );       
//         console.log("Numero total de alumnos")    
//         console.log(total) 
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// async function nombreStudents() {
//     try {
//         let alumnos = await       
//        Marks.aggregate(
//             [
//                 {  
//                     $group:{ "_id": {"Nombre" : "$student_first_name" , "Apellido" : "$student_last_name"}}
//                 } 
//             ]
//         );       
//         console.log("Nombre y apellido de todos los alumnos")    
//         console.log(alumnos) 
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// async function nombreTeachers() {
//     let teachers = 0;
//     try {
//        teachers = await Marks.aggregate([{$unwind: "$teachers"},{$project:{"_id":0,"teachers.teacher_first_name":1,"teachers.teacher_last_name":1}}]);       
//         console.log("Nombre y apellidos de los profesores")    
//         console.log(teachers) 
//     }
//     catch (err) {
//         console.log(err)
//     }
// }


// async function grupoAlumnos() {
//     let alfa = 0;
//     try {
//        alfa = await Marks.aggregate([{$group:{"_id": {"Grupo":"$group_name"},"Total de alumnos":{"$sum":1}}},{$sort:{"_id": -1}}])   
//         console.log("Numero total de alumnos por grupo en orden inverso alfabetico")    
//         console.log(alfa) 
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// async function topAsignaturas() {
//     let asign = 0;
//     try {
//        asign = await Marks.aggregate([{$group:{ _id: "$subject_name", "media": {"$avg": "$mark"}}},{$limit:5},{$match:{"media":{"$gt":5}}},{$sort:{"media":- 1}}])
//         console.log("Top 5 asignaturas por nota")    
//         console.log(asign) 
//     }
//     catch (err) {
//         console.log(err)
//     }
// }
// topAsignaturas()

// async function totalProfesores() {
//     try {
//         let totalProf = await       
//        Marks.aggregate(
//             [{$unwind: "$teachers"},{$group:{"_id": {"Asignatura" :"$subject_name"},"Total de profesores" : {"$sum":1}}}])         
                       
//         console.log("Numero total de profesores por asignatura")    
//         console.log(totalProf) 
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// async function nombreStudents() {
//         try {
//             let alumnos = await       
//            Marks.aggregate
//            ([{$match:{"$or":[{mark: {"$gte": 8}},{date:{"$lt": new Date('2022,01,01')}}]}},{$project: {"Nombre" : "$student_first_name" , "Apellido" : "$student_last_name", "Nota" : "$mark", "Fecha": "$date"}}]);       
//             console.log("Nombre y apellido de todos los alumnos con nota mayor a ocho o del año pasado o anterior")    
//             console.log(alumnos) 
//         }
//         catch (err) {
//             console.log(err)
//         }
//     }

//     async function anyoMedia() {
//     try {
//         let mediaAnyo = await       
//        Marks.aggregate(
//             [{$match:{"$and":[{date:{"$gte": new Date('2022,01,01')}},{date:{"$lt": new Date('2022,12,31')}}]}},{$group:{_id:"$subject_name","Nota Media":{$avg: "$mark"}}}]);       
//         console.log("Todas las notas del alumno")    
//         console.log(mediaAnyo) 
//     }
//     catch (err) {
//         console.log(err)
//     }
// }


// async function totalAsignaturas(teacher_first_name, teacher_last_name){
//     try{
//         let totalAsign = await 
//         Marks.aggregate( 
//             [{$unwind:"$teachers"},{$match:{"teacher_first_name" : teacher_first_name , "teacher_last_name" : teacher_last_name }},{$group: {"_id":{"Nombre Alumno": "$student_first_name"},"Total Asignaturas": {"$sum":1}}}]
//         )
        
//         console.log("Nombres y cantidad total de asignaturas")
//         console.log(totalAsign)
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// totalAsignaturas("Severus")
// {$group:{"_id": teacher_first_name}}{$count:{_id:null,"Asignatura":{$sum:1}}}