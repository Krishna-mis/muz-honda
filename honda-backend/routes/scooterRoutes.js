const express = require("express");
const upload = require("../middlewares/uploadMiddleware");
const {
  postScooterDetails,
  getScooterDetails,
  downloadDocument,
  getAllScooters,
} = require("../controllers/scooterController");

const router = express.Router();

// POST API for Uploading Scooter Data
router.post(
  "/scooter",
  upload.fields([
    { name: "nameImg", maxCount: 1 },
    { name: "bikeIcon", maxCount: 1 },
    { name: "image", maxCount: 1 },
    { name: "document", maxCount: 1 },
  ]),
  postScooterDetails
);

// GET API for Fetching Scooter Details by ID
router.get("/scooter/:id", getScooterDetails);

// GET API for Downloading Document
router.get("/scooter/document/:id", downloadDocument);
router.get("/scooters", getAllScooters);

module.exports = router;
