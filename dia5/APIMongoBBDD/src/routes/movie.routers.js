const {Router} = require ("express")
const router = Router();
const movieCtrl = require("../controller/movie.controller")

// ROUTERS movie

router.get("/", movieCtrl.getStart);

router.get("/movie/", movieCtrl.getMovie);

router.get("/movie/actor/", movieCtrl.getActores);

router.get("/movie/writer/", movieCtrl.getGuionistas);

router.get("/movie/director/", movieCtrl.getDirectores);

router.get("/movie/producer/", movieCtrl.getProducer);

router.post("/movie/", movieCtrl.postMovie);

router.post("/movie/actor/", movieCtrl.postActors);

router.post("/movie/writer/", movieCtrl.postWriters);

router.post("/movie/director/", movieCtrl.postDirectors);

router.put("/movie/", movieCtrl.putMovie)

router.delete("/movie", movieCtrl.deleteMovie)

router.delete("/movie/actor", movieCtrl.deleteActor)

router.delete("/movie/writer", movieCtrl.deleteWriter)

router.delete("/movie/director", movieCtrl.deleteDirector)







module.exports = router;