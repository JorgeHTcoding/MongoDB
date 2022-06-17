const {Router} = require ("express")
const router = Router();
const photoCtrl = require("../controller/photos.controller")

// ROUTERS Photos

router.get("/", photoCtrl.getStart);

router.get("/photos/", photoCtrl.getPhotos);

router.post("/photos",  photoCtrl.postPhotos);

router.put("/photos",  photoCtrl.putPhotos);

router.delete("/photos", photoCtrl.deletePhotos)



module.exports = router;