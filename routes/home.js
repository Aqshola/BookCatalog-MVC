const express = require("express");
const { getBookHome, getBookDetail } = require("../controller/home");
const router = express.Router();

router.get("/", getBookHome);
router.get("/book/:id", getBookDetail);

module.exports = router;
