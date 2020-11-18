const express = require("express");
const { getBookHome } = require("../controller/home");
const router = express.Router();

router.get("/", getBookHome);

module.exports = router;
