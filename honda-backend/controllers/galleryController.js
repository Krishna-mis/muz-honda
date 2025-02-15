const db = require("../config/db");
const upload = require("../middlewares/uploadMiddleware");

// Upload multiple images
const uploadImages = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No images uploaded" });
  }

  const images = req.files.map((file) => [file.path]);

  const sql = "INSERT INTO gallery (image_path) VALUES ?";
  db.query(sql, [images], (err, result) => {
    if (err) return res.status(500).json({ error: "Database error", err });
    res.status(201).json({
      message: "Images uploaded successfully",
      inserted: result.affectedRows,
    });
  });
};

// Get all images from the gallery
const getGallery = (req, res) => {
  const sql = "SELECT * FROM gallery ORDER BY id DESC";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database error", err });
    res.status(200).json(results);
  });
};

module.exports = { uploadImages, getGallery };
