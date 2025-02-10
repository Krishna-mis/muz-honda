const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Handle Opt-In Form Submission
router.post("/", (req, res) => {
  const { registration, name, mobile, notifications } = req.body;

  // Validate required fields
  if (!registration || !name || !mobile) {
    return res.status(400).json({
      success: false,
      message: "All fields are required!",
    });
  }

  const query = `INSERT INTO opt_in (registration, name, mobile, notifications) VALUES (?, ?, ?, ?)`;

  db.query(
    query,
    [registration, name, mobile, JSON.stringify(notifications)],
    (error) => {
      if (error) {
        console.error("MySQL Error:", error.message);
        return res.status(500).json({
          success: false,
          message:
            "An error occurred while processing your request. Please try again later.",
        });
      }

      res.status(201).json({
        success: true,
        message:
          "Your opt-in request has been submitted successfully. Thank you!",
      });
    }
  );
});

module.exports = router;
