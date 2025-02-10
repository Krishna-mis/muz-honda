require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const serviceRoutes = require("./routes/serviceRoutes");
const amcRoutes = require("./routes/amcRoutes");
const warrantyRoutes = require("./routes/warrantyRoutes");
const offerRoutes = require("./routes/offerRoutes");
const financeRoutes = require("./routes/financeRoutes");
const contactRoutes = require("./routes/contactRoutes");
const optInRoutes = require("./routes/optInRoutes");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());

// Use Routes
app.use("/book-service", serviceRoutes);
app.use("/amc", amcRoutes);
app.use("/warranty", warrantyRoutes);
app.use("/offer", offerRoutes);
app.use("/finance", financeRoutes);
app.use("/contact", contactRoutes);
app.use("/opt-in", optInRoutes);

// Sample Route
app.get("/", (req, res) => {
  res.send("Node.js Backend with Apache & MySQL is running!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
