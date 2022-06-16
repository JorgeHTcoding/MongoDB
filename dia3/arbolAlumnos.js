let mongoose = require("mongoose");

const TeacherDocument = new mongoose.Schema({

    teacher_first_name: String,
    teacher_last_name: String,
   
})

const MarksDocument = new mongoose.Schema({   
    
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers : [TeacherDocument]

})


module.exports = mongoose.model("Marks",MarksDocument,"Marks")