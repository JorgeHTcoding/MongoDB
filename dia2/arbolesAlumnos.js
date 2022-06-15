let mongoose = require("mongoose");

const TeachersDocument = new mongoose.Schema({

    firstName: String,
    lastName: String,
   
})

const SubjectsDocument = new mongoose.Schema({

    title : String,  
    teacher : [TeachersDocument]

})
const MarksDocument = new mongoose.Schema({

    date: Date,
    mark: Number,  
    subject: SubjectsDocument 

    
})

const StudentsDocument = new mongoose.Schema({

    firstName: String,
    lastName: String,
    marks : [MarksDocument]


})




module.exports = mongoose.model("Students",StudentsDocument,"Students")