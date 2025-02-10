const express = require("express");
const router = express.Router();
const db = require("../config/db"); // MySQL Connection

// Submit Offer Form
router.post("/", (req, res) => {
  const { name, email, contact, agree } = req.body;

  // Input Validation
  if (!name || !email || !contact || agree !== true) {
    return res.status(400).json({
      success: false,
      message: "All fields are required, and agreement must be checked",
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format",
    });
  }

  const query = `INSERT INTO offers (name, email, contact) VALUES (?, ?, ?)`;

  db.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection error:", err);
      return res.status(500).json({
        success: false,
        message:
          "Unable to establish a database connection. Please try again later.",
      });
    }

    connection.query(query, [name, email, contact], (error, results) => {
      connection.release(); // Release connection back to the pool

      if (error) {
        console.error("Offer Submission Error:", error);
        return res.status(500).json({
          success: false,
          message:
            "An error occurred while processing your request. Please try again later.",
        });
      }

      res.status(201).json({
        success: true,
        message:
          "Your offer enquiry has been submitted successfully. Our team will get back to you shortly.",
      });
    });
  });
});

module.exports = router;
