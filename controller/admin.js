const Book = require("../models/book");
const Category = require("../models/category");

const getBookAdmin = async (req, res) => {
  try {
    const books = await Book.find().sort({ date: -1 });
    res.render("pages/admin/dashboard", { books: books });
  } catch (err) {
    console.log(err);
  }
};

const getAddBook = async (req, res) => {
  try {
    const categories = await Category.find().sort({ category: -1 });
    res.render("pages/admin/addBook", { categories: categories });
  } catch (err) {}
};

const getEditBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.render("pages/admin/editBook", { book: book });
  } catch (err) {
    console.log(err);
  }
};

const getCategoryAdmin = async (req, res) => {
  try {
    const categories = await Category.find().sort({ category: -1 });
    res.render("pages/admin/category", { categories: categories });
  } catch (err) {}
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

const PostAddCategory = async (req, res) => {
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  try {
    const { category } = req.body;

    const newCategory = new Category({
      category: capitalizeFirstLetter(category),
    });

    await newCategory.save();

    req.session.message = {
      message: "Added new Category",
      type: "success",
    };
    return res.redirect("/admin/category");
  } catch (err) {
    req.session.message = {
      message: "category cannot empty",
      type: "danger",
    };
    return res.redirect("/admin/category");
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

const removeCategory = async (req, res) => {
  try {
    const id = req.params.id;
    await Category.findByIdAndDelete(id);
    req.session.message = {
      message: "Delete Category",
      type: "success",
    };
    return res.redirect("/admin/category");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getBookAdmin,
  getAddBook,
  getEditBook,
  getCategoryAdmin,
  PostAddBook,
  PostEditBook,
  PostAddCategory,
  removeBook,
  removeCategory,
};
