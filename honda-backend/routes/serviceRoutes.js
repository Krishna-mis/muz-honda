const express = require("express");
const db = require("../config/db");
const router = express.Router();

// API Endpoint to Save Form Data
router.post("/", (req, res) => {
  const {
    model,
    enteredModel,
    yearOfPurchase,
    serviceType,
    registrationNumber,
    bookingDate,
    name,
    email,
    contactNumber,
    message,
  } = req.body;

  const sql = `INSERT INTO bookings (model, enteredModel, yearOfPurchase, serviceType, registrationNumber, bookingDate, name, email, contactNumber, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    model,
    enteredModel,
    yearOfPurchase,
    serviceType,
    registrationNumber,
    bookingDate,
    name,
    email,
    contactNumber,
    message,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).json({
        success: false,
        message:
          "An error occurred while saving the booking. Please try again later.",
      });
    } else {
      res.status(200).json({
        success: true,
        message:
          "Your booking has been saved successfully. We will confirm the details shortly.",
      });
    }
  });
});

module.exports = router;
