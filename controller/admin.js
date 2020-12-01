const Book = require("../models/book");
const Category = require("../models/category");
const imgCloud = require("../config/cloudinary");

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
    const categories = await Category.find().sort({ category: 1 });
    res.render("pages/admin/addBook", { categories: categories });
  } catch (err) {}
};

const getEditBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    const categories = await Category.find().sort({ category: 1 });
    res.render("pages/admin/editBook", { book: book, categories: categories });
  } catch (err) {
    console.log(err);
  }
};

const getCategoryAdmin = async (req, res) => {
  try {
    const categories = await Category.find().sort({ category: 1 });
    res.render("pages/admin/category", { categories: categories });
  } catch (err) {}
};

const PostAddBook = async (req, res) => {
  let result = "";
  try {
    if (req.session.failed) {
      return res.redirect(req.originalUrl);
    } else {
      if (req.file) {
        result = await imgCloud.uploader.upload(req.file.path, {
          folder: "uploads",
        });
      }

      const { title, type, price, synopsis } = req.body;

      const newBook = new Book({
        title: title,
        type: type,
        price: price,
        synopsis: synopsis,
        coverId: req.file ? result.public_id : "",
        coverImg: req.file ? result.url : "",
      });
      await newBook.save();
      req.session.message = {
        message: "Added New Book",
        type: "success",
      };
      return res.redirect("/admin/add-book");
    }
  } catch (err) {
    console.log(err);
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
  try {
    const book = await Book.findById(req.params.id);
    const result = "";
    if (req.session.failed) {
      return res.redirect(req.originalUrl);
    } else {
      if (req.file) {
        if (book.coverImg) {
          imgCloud.uploader.destroy(book.coverId);
        }
        result = await imgCloud.uploader.upload(req.file.path, {
          folder: "uploads",
        });
      }

      const bookData = {
        title: title,
        price: price,
        type: type,
        synopsis: synopsis,
        coverId: req.file ? result.public_id : "",
        coverImg: req.file ? result.url : book.coverImg,
      };
      await book.updateOne(bookData, { useFindAndModify: false });
      req.session.message = {
        message: "Edit Book Success",
        type: "success",
      };
      return res.redirect(`/admin`);
    }
  } catch (err) {
    console.log(err);
  }
};

const removeBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(req.params.id);

    if (book.coverImg) {
      imgCloud.uploader.destroy(book.coverId);
    }
    await Book.deleteOne({ _id: id });
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
