const express = require("express");
const { register, login, getUser } = require("../Controllers/authcontroller");
const authMiddleware = require("../Middlewares/authmiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", authMiddleware, getUser);

module.exports = router