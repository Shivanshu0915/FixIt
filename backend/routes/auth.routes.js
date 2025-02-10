const express = require("express");
const router = express.Router();
const { authController } = require("../controller");
const { login, signup } = authController;

router.post("/login", login);
router.post("/signup", signup);

module.exports = router;