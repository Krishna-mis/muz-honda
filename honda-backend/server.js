require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("./config/db");
const serviceRoutes = require("./routes/serviceRoutes");
const amcRoutes = require("./routes/amcRoutes");
const warrantyRoutes = require("./routes/warrantyRoutes");
const offerRoutes = require("./routes/offerRoutes");
const financeRoutes = require("./routes/financeRoutes");
const contactRoutes = require("./routes/contactRoutes");
const optInRoutes = require("./routes/optInRoutes");
const imageRoutes = require("./routes/imageRoutes");
const scooterRoutes = require("./routes/scooterRoutes");
const bikeRoutes = require("./routes/bikeRoutes");
const galleryRoutes = require("./routes/galleryRoutes");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Use Routes
app.use("/book-service", serviceRoutes);
app.use("/amc", amcRoutes);
app.use("/warranty", warrantyRoutes);
app.use("/offer", offerRoutes);
app.use("/finance", financeRoutes);
app.use("/contact", contactRoutes);
app.use("/opt-in", optInRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", imageRoutes);
app.use("/api", scooterRoutes);
app.use("/api", bikeRoutes);
app.use("/api", galleryRoutes);

// Sample Route
app.get("/", (req, res) => {
  res.send("Node.js Backend with Apache & MySQL is running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
