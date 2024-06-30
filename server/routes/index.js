const express = require("express");
const router = express.Router();

// Import individual route files
const userRoutes = require("./user");
const userAuth = require("./auth");

// Use the routes
router.use("/user", userRoutes);

module.exports = router;
