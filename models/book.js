const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  coverId: {
    type: "String",
  },
  coverImg: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  synopsis: {
    type: String,
  },
  inputDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Post = mongoose.model("book", BookSchema);
