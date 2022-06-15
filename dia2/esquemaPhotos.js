let mongoose = require("mongoose");

const PhotosDocument = new mongoose.Schema({

    userName: String,
    imgUrl: String,
    title: String,
    description: String

})

module.exports = mongoose.model("Photos",PhotosDocument,"Photos")