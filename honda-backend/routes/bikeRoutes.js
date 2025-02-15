const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const {
  postBikeDetails,
  getBikeDetails,
  downloadBikeDocument,
  getAllBikes,
} = require("../controllers/bikeController");

const router = express.Router();

// POST API for Uploading Bike Data
router.post(
  "/bike",
  upload.fields([
    { name: "nameImg", maxCount: 1 },
    { name: "bikeIcon", maxCount: 1 },
    { name: "image", maxCount: 1 },
    { name: "document", maxCount: 1 },
  ]),
  postBikeDetails
);

// GET APIs
router.get("/bike/:id", getBikeDetails);
router.get("/bike/:id/document", downloadBikeDocument);
router.get("/bikes", getAllBikes);
module.exports = router;
