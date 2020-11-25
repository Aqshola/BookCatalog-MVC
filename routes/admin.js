const express = require("express");
const Multer = require("../middleware/Multer");
const Auth = require("../middleware/Auth");

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

router.post("/add-book", Multer, PostAddBook);

router.post("/remove-book/:id", Auth, removeBook);

router.post("/edit-book/:id", Multer, PostEditBook);

router.post("/category", PostAddCategory);

router.post("/remove-category/:id", removeCategory);

module.exports = router;
