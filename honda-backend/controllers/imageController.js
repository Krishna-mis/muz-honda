const db = require("../config/db");
const path = require("path");

const uploadImage = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }

  let imageEntries = req.files.map((file) => [
    file.filename,
    `uploads/${file.filename}`,
  ]);

  const sql = "INSERT INTO images (filename, filepath) VALUES ?";
  db.query(sql, [imageEntries], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Images uploaded successfully", files: req.files });
  });
};

const getImages = (req, res) => {
  const sql = "SELECT * FROM images";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

module.exports = { uploadImage, getImages };
