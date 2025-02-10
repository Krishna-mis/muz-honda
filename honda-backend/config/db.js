require("dotenv").config();
const mysql = require("mysql");

// Create MySQL Connection Pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // Change if you have a password
  database: "muzhonda",
  connectionLimit: 10, // Limit concurrent connections
});

// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }

  console.log("Successfully connected to MySQL database");
  connection.release(); // Release connection back to the pool
});

module.exports = db;
