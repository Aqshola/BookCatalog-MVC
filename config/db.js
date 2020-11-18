const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookCatalog", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connect to db");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
