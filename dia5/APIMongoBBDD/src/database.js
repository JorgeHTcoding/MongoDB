let mongoose = require("mongoose")


mongoose.connect('mongodb+srv://combowombo:wombo321@clustermongo.ar5myhr.mongodb.net/IMDB',
                {useNewUrlParser:true , useUnifiedTopology:true})

                .then((db) => {
                    console.log("database connectend on " + db.connection.host)
                })
                .catch((error) => {
                    console.log(error)
                })