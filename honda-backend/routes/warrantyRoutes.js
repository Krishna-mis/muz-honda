const express = require("express");
const router = express.Router();
const db = require("../config/db"); // MySQL Connection

router.post("/", (req, res) => {
  const {
    model,
    yearOfPurchase,
    registrationNumber,
    name,
    email,
    contactNumber,
    message,
  } = req.body;

  // Input Validation
  if (
    !model ||
    !yearOfPurchase ||
    !registrationNumber ||
    !name ||
    !email ||
    !contactNumber
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
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

  const query = `INSERT INTO warranty (model, year_of_purchase, registration_number, name, email, contact_number, message) VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.getConnection((err, connection) => {
    if (err) {
      console.error("Database connection error:", err);
      return res.status(500).json({
        success: false,
        message:
          "Unable to establish a database connection. Please try again later.",
      });
    }

    connection.query(
      query,
      [
        model,
        yearOfPurchase,
        registrationNumber,
        name,
        email,
        contactNumber,
        message,
      ],
      (error, results) => {
        connection.release(); // Release connection back to the pool

        if (error) {
          console.error("Warranty Enquiry Error:", error);
          if (error.code === "ER_DUP_ENTRY") {
            return res.status(400).json({
              success: false,
              message: "Duplicate entry, registration number already exists",
            });
          }
          return res.status(500).json({
            success: false,
            message:
              "An error occurred while processing your request. Please try again later.",
          });
        }

        res.status(201).json({
          success: true,
          message:
            "Your warranty enquiry has been submitted successfully. Our team will get back to you shortly.",
        });
      }
    );
  });
});

module.exports = router;
