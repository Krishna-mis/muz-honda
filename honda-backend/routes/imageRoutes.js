const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { uploadImage, getImages } = require("../controllers/imageController");

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

const upload = multer({ storage, fileFilter });

router.post("/upload-multiple", upload.array("images", 16), uploadImage);
router.get("/images", getImages);

module.exports = router;
