const express = require("express");
const {
  getBookHome,
  getBookDetail,
  getBookSearch,
} = require("../controller/home");
const router = express.Router();

router.get("/", getBookHome);
router.get("/book/:id", getBookDetail);
router.get("/search", getBookSearch);

module.exports = router;
