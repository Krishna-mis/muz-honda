const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {
  const { name, email, contact, reason, message } = req.body;

  // Validate required fields
  if (!name || !email || !contact || !reason) {
    return res.status(400).json({
      success: false,
      message: "All required fields must be provided.",
    });
  }

  const query = `
        INSERT INTO contact_requests (name, email, contact, reason, message) 
        VALUES (?, ?, ?, ?, ?)
    `;

  db.query(query, [name, email, contact, reason, message], (error) => {
    if (error) {
      console.error("MySQL Error:", error.sqlMessage);
      return res.status(500).json({
        success: false,
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    }

    res.status(201).json({
      success: true,
      message:
        "Your contact request has been submitted successfully. Our team will get back to you shortly.",
    });
  });
});

module.exports = router;
