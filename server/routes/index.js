const express = require("express");
const router = express.Router();

// Import individual route files
const userRoutes = require("./user");

// Use the routes
router.use("/user", userRoutes);

module.exports = router;
