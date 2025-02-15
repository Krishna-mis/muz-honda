const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Submit Finance Form
router.post("/", (req, res) => {
  const { name, email, contact, loanAmount, model, message, agreed } = req.body;
  const loanAmountNum = parseFloat(loanAmount);

  // Input Validation
  if (
    !name ||
    !email ||
    !contact ||
    isNaN(loanAmountNum) ||
    !model ||
    agreed === undefined
  ) {
    return res.status(400).json({
      success: false,
      message: "All fields are required, and agreement must be checked",
    });
  }

  // Validate email format
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid email format" });
  }

  // SQL Query
  const query = `
        INSERT INTO finance_requests (name, email, contact, loan_amount, model, message, agreed) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

  // Execute Query
  db.query(
    query,
    [name, email, contact, loanAmountNum, model, message, agreed ? 1 : 0],
    (error) => {
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
          "Your finance enquiry has been submitted successfully. Our team will get back to you shortly.",
      });
    }
  );
});

module.exports = router;
