const express = require("express");
const auth = require("../middleware/Auth");
const router = express.Router();
const { getLogin, postLogin } = require("../controller/auth");

router.get("/login", getLogin);

router.post("/login", postLogin);

module.exports = router;
