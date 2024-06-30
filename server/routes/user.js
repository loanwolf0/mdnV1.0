const express = require("express");
const router = express.Router();
const user = require("../controllers/user");
const { authenticateToken } = require("./auth");

router.post("/sign-up", user.signUp);
router.post("/sign-in", user.logIn);
router.get("/get-user-information", authenticateToken, user.getUserById);
router.get("/update-address", authenticateToken, user.updateUserAddress);

module.exports = router;
