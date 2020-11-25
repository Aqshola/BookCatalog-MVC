const Book = require("../models/book");

const getBookHome = async (req, res) => {
  const books = await Book.find().sort({ date: -1 });

  res.render("pages/home/index", { books: books, pagetitle: "Book Catalog" });
};

const getBookDetail = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.render("pages/home/detailBook", { book: book });
};

const getBookSearch = async (req, res) => {
  const { title } = req.query;
  const books = await Book.find().where({ title: new RegExp(title, "i") });

  res.render("pages/home/index", {
    books: books,
    pagetitle: `Search result ${books.length} found`,
  });
};

module.exports = {
  getBookHome,
  getBookDetail,
  getBookSearch,
};
