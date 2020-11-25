const express = require("express");

const router = express.Router();
const { getLogin, Logout, postLogin } = require("../controller/auth");

router.get("/login", getLogin);

router.get("/logout", Logout);

router.post("/login", postLogin);

module.exports = router;
