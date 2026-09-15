const express = require("express");

const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes.js");

const app = express();
const PORT = 3000;

// JSON middleware
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Student Management REST API is running"
  });
});

// Student routes
app.use("/students", studentRoutes);

// 404 route
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});