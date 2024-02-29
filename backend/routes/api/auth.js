const express = require("express");
const { signup, logout } = require("../../controllers/auth");
const authenticate = require("../../middlewares/authenticate");
const router = express.Router();

router.post("/signup", signup);

router.post("/logout", authenticate, logout);

module.exports = router;
