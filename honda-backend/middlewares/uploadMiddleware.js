const multer = require("multer");
const path = require("path");

// Multer Storage Configuration with Unique Filenames
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

//  Set File Size Limit (15 MB)
const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 },
});

module.exports = upload;
