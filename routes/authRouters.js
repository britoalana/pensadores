const express = require("express");
const router = express.Router();

const AuthControlller = require("../controllers/AuthController");

router.get("/login", AuthControlller.login);
router.get("/register", AuthControlller.register);
router.post("/register", AuthControlller.registerPost);

module.exports = router
