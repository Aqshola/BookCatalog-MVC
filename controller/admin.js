const Book = require("../models/book");

const getBookAdmin = async (req, res) => {
  try {
    const books = await Book.find().sort({ date: -1 });
    res.render("pages/admin/dashboard", { books: books });
  } catch (err) {
    console.log(err);
  }
};

const getAddBook = (req, res) => {
  res.render("pages/admin/addBook");
};

const getEditBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.render("pages/admin/editBook", { book: book });
  } catch (err) {
    console.log(err);
  }
};

const PostAddBook = async (req, res) => {
  try {
    const { title, type, price, synopsis } = req.body;
    const newBook = new Book({
      title,
      type,
      price,
      synopsis,
    });

    await newBook.save();

    req.session.message = {
      message: "Added New Book",
      type: "success",
    };
    return res.redirect("/admin/add-book");
  } catch (err) {
    req.session.message = {
      message: "Title, type and price cannot empty",
      type: "danger",
    };
    return res.redirect("/admin/add-book");
  }
};

const PostEditBook = async (req, res) => {
  const { title, price, type, synopsis } = req.body;
  const id = req.params.id;

  try {
    const bookData = {
      title,
      price,
      type,
      synopsis,
    };
    await Book.findByIdAndUpdate(id, bookData, { useFindAndModify: false });
    req.session.message = {
      message: "Edit Book Success",
      type: "success",
    };
    res.redirect(`/admin`);
  } catch (err) {
    console.log(err);
  }
};

const removeBook = async (req, res) => {
  try {
    const id = req.params.id;
    await Book.findByIdAndDelete(id);
    req.session.message = {
      message: "Delete Book",
      type: "success",
    };
    return res.redirect("/admin");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getBookAdmin,
  getAddBook,
  getEditBook,
  PostAddBook,
  PostEditBook,
  removeBook,
};
