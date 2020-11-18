const book = require("../models/book");

const getBookAdmin = async (req, res) => {
  try {
    const books = await book.find().sort({ date: -1 });
    res.render("pages/dashboard", { books: books });
  } catch (err) {
    console.log(err);
  }
};

const getAddBook = (req, res) => {
  res.render("pages/addBook");
};

const PostAddBook = async (req, res) => {
  try {
    const { title, type, price, synopsis } = req.body;
    const newBook = new book({
      title,
      type,
      price,
      synopsis,
    });

    await newBook.save();

    req.session.message = {
      display: true,
      message: "Added New Book",
      type: "success",
    };
    return res.redirect("/admin/add-book");
  } catch (err) {
    console.log(err);
  }
};

const getEditBook = (req, res) => {
  res.render("pages/editBook");
};

module.exports = {
  getBookAdmin,
  getAddBook,
  getEditBook,
  PostAddBook,
};
