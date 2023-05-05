const express = require("express");
const { uploadImage, getImage } = require("../controllers/imageController");
const upload = require("../middleware/multerMiddleware");
const router = express.Router();


router.post("/upload", upload.single("image"), uploadImage);

router.get("/:imageID", getImage);

module.exports = router