const express = require("express");
const Multer = require("../middleware/Multer");
const Auth = require("../middleware/Auth");
const Validate = require("../middleware/Validate");

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
router.get("/", Auth, getBookAdmin);

router.get("/add-book", Auth, getAddBook);

router.get("/edit-book/:id", Auth, getEditBook);

router.get("/category", Auth, getCategoryAdmin);

router.post("/add-book", [Multer, Auth, Validate], PostAddBook);

router.post("/remove-book/:id", Auth, removeBook);

router.post("/edit-book/:id", [Multer, Auth], PostEditBook);

router.post("/category", PostAddCategory);

router.post("/remove-category/:id", Auth, removeCategory);

module.exports = router;
