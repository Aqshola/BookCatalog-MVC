const express = require("express");
const {
  getBookAdmin,
  getAddBook,
  getEditBook,
  PostAddBook,
  removeBook,
  PostEditBook,
} = require("../controller/admin");
const router = express.Router();

//getBook for admin page
router.get("/", getBookAdmin);

router.get("/add-book", getAddBook);

router.get("/edit-book/:id", getEditBook);

// router.post("/add-book", PostAddBook);
router.post("/add-book", PostAddBook);

router.post("/remove-book/:id", removeBook);

router.post("/edit-book/:id", PostEditBook);

module.exports = router;
