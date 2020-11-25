const express = require("express");
const { getNotFound } = require("../controller/notfound");

const router = express.Router();

router.get("*", getNotFound);

module.exports = router;
