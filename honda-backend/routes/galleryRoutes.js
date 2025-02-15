const express = require("express");
const router = express.Router();
const {
  uploadImages,
  getGallery,
} = require("../controllers/galleryController");
const upload = require("../middlewares/uploadMiddleware");

// Route to upload multiple images
router.post("/galleryupload", upload.array("images", 10), uploadImages); // Accepts up to 10 images

// Route to fetch gallery images
router.get("/gallery", getGallery);

module.exports = router;
