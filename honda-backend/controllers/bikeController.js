const db = require("../config/db");
const path = require("path");

// POST API to Save Bike Data
const postBikeDetails = (req, res) => {
  const { engine, power, transmission } = req.body;

  if (!engine || !power || !transmission) {
    return res.status(400).json({ error: "All fields are required!" });
  }

  // File Paths
  const nameImg = req.files["nameImg"]
    ? `/uploads/${req.files["nameImg"][0].filename}`
    : null;
  const bikeIcon = req.files["bikeIcon"]
    ? `/uploads/${req.files["bikeIcon"][0].filename}`
    : null;
  const image = req.files["image"]
    ? `/uploads/${req.files["image"][0].filename}`
    : null;
  const document = req.files["document"]
    ? `/uploads/${req.files["document"][0].filename}`
    : null;

  // Insert Data into Database
  const sql =
    "INSERT INTO bikes (nameImg, bikeIcon, image, engine, power, transmission, document) VALUES (?, ?, ?, ?, ?, ?, ?)";
  const values = [
    nameImg,
    bikeIcon,
    image,
    engine,
    power,
    transmission,
    document,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res
      .status(201)
      .json({ message: "Bike added successfully!", id: result.insertId });
  });
};

// GET API to Fetch Bike Details by ID
const getBikeDetails = (req, res) => {
  const bikeId = req.params.id;

  const sql = "SELECT * FROM bikes WHERE id = ?";
  db.query(sql, [bikeId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Bike not found" });
    }

    const bike = result[0];

    res.json({
      id: bike.id,
      nameImg: bike.nameImg,
      bikeIcon: bike.bikeIcon,
      image: bike.image,
      specs: {
        engine: bike.engine,
        power: bike.power,
        transmission: bike.transmission,
        document: bike.document,
      },
    });
  });
};

// API to Download Bike Document
const downloadBikeDocument = (req, res) => {
  const bikeId = req.params.id;

  const sql = "SELECT document FROM bikes WHERE id = ?";
  db.query(sql, [bikeId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.length === 0 || !result[0].document) {
      return res.status(404).json({ message: "Document not found" });
    }

    const documentPath = path.join(__dirname, "../", result[0].document);
    res.download(documentPath);
  });
};

const getAllBikes = (req, res) => {
  const sql = "SELECT * FROM bikes";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No bikes found" });
    }

    // Formatting response
    const bikes = results.map((bike) => ({
      id: bike.id,
      nameImg: bike.nameImg,
      bikeIcon: bike.bikeIcon,
      image: bike.image,
      specs: {
        engine: bike.engine,
        power: bike.power,
        transmission: bike.transmission,
        document: bike.document,
      },
    }));

    res.json(bikes);
  });
};

module.exports = {
  postBikeDetails,
  getBikeDetails,
  downloadBikeDocument,
  getAllBikes,
};
