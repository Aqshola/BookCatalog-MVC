const express = require("express");
const {
  getBookAdmin,
  getAddBook,
  getEditBook,
  getCategoryAdmin,
  PostAddBook,
  PostEditBook,
  PostAddCategory,
  removeBook,
  removeCategory,
} = require("../controller/admin");
const router = express.Router();

//getBook for admin page
router.get("/", getBookAdmin);

router.get("/add-book", getAddBook);

router.get("/edit-book/:id", getEditBook);

router.get("/category", getCategoryAdmin);

// router.post("/add-book", PostAddBook);
router.post("/add-book", PostAddBook);

router.post("/remove-book/:id", removeBook);

router.post("/edit-book/:id", PostEditBook);

router.post("/category", PostAddCategory);

router.post("/remove-category/:id", removeCategory);

module.exports = router;
