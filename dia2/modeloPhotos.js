let mongoose = require("mongoose");
let Photos = require("./esquemaPhotos");

mongoose.connect('mongodb+srv://combowombo:wombo321@clustermongo.ar5myhr.mongodb.net/photos',
                {useNewUrlParser: false, useUnifiedTopology: false})


let PhotosDocument = new Photos({
    userName:"ComboWombo",
    imgUrl:"https://i.ibb.co/mDM5xVk/wombatcito.jpg",
    title:"Wombatcito",
    description:"El wombatcito tiene sueño"
})


PhotosDocument.save()
.then((data) =>
{
    console.log(data);    
})
.catch((err) =>
{
    console.log(err)
})

