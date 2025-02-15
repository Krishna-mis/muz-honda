const express = require("express");
const router = express.Router();
const db = require("../config/db");

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

  // Validate required fields
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
      message: "All required fields must be provided.",
    });
  }

  const query = `
        INSERT INTO amc (model, year_of_purchase, registration_number, name, email, contact_number, message) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

  db.getConnection((err, connection) => {
    if (err) {
      console.error("Database Connection Error:", err);
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
        connection.release();

        if (error) {
          console.error("AMC Enquiry Submission Error:", error);
          return res.status(500).json({
            success: false,
            message:
              "An error occurred while processing your request. Please try again later.",
          });
        }

        res.status(201).json({
          success: true,
          message:
            "Your AMC enquiry has been submitted successfully. Our team will get back to you shortly.",
        });
      }
    );
  });
});

module.exports = router;
