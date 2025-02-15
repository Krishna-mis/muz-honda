const db = require("../config/db");
const path = require("path");

const postScooterDetails = (req, res) => {
  try {
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
      "INSERT INTO scooters (nameImg, bikeIcon, image, engine, power, transmission, document) VALUES (?, ?, ?, ?, ?, ?, ?)";
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
        console.error("Database Error:", err);
        return res.status(500).json({ error: "Database error!" });
      }
      res.status(201).json({
        message: "Scooter added successfully!",
        id: result.insertId,
      });
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

// GET API to Fetch Scooter Details by ID
const getScooterDetails = (req, res) => {
  const scooterId = req.params.id;

  const sql = "SELECT * FROM scooters WHERE id = ?";
  db.query(sql, [scooterId], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: "Scooter not found" });
    }

    const scooter = result[0];

    res.json({
      id: scooter.id,
      nameImg: scooter.nameImg,
      bikeIcon: scooter.bikeIcon,
      image: scooter.image,
      specs: {
        engine: scooter.engine,
        power: scooter.power,
        transmission: scooter.transmission,
        document: scooter.document,
      },
    });
  });
};

// API to Download Scooter Document
const downloadDocument = (req, res) => {
  try {
    const scooterId = req.params.id;

    const sql = "SELECT document FROM scooters WHERE id = ?";
    db.query(sql, [scooterId], (err, result) => {
      if (err) {
        console.error("Database Error:", err);
        return res.status(500).json({ error: "Database error!" });
      }

      if (result.length === 0 || !result[0].document) {
        return res.status(404).json({ message: "Document not found" });
      }

      const documentPath = path.join(__dirname, "../", result[0].document);
      res.download(documentPath);
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error!" });
  }
};

const getAllScooters = (req, res) => {
  const sql = "SELECT * FROM scooters";

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: "No scooters found" });
    }

    // Formatting response
    const scooters = results.map((scooter) => ({
      id: scooter.id,
      nameImg: scooter.nameImg,
      bikeIcon: scooter.bikeIcon,
      image: scooter.image,
      specs: {
        engine: scooter.engine,
        power: scooter.power,
        transmission: scooter.transmission,
        document: scooter.document,
      },
    }));

    res.json(scooters);
  });
};

module.exports = {
  postScooterDetails,
  getScooterDetails,
  downloadDocument,
  getAllScooters,
};
