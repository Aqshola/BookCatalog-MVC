const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.json("home");
});

module.exports = router;
