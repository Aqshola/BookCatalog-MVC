const Book = require("../models/book");

const getBookHome = async (req, res) => {
  const books = await Book.find().sort({ date: -1 });

  res.render("pages/index", { books: books });
};

const getBookDetail = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("pages/detailBook", { book: book });
};

module.exports = {
  getBookHome,
  getBookDetail,
};
