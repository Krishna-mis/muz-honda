require("dotenv").config();
const mysql = require("mysql");

// Create MySQL Connection Pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "muzhonda",
  connectionLimit: 10,
});

// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }

  console.log("Successfully connected to MySQL database");
  connection.release();
});

module.exports = db;
