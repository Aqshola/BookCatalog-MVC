require("dotenv").config();
const mongoose = require("mongoose");

const db = `mongodb://${process.env.USER}:${process.env.PASS}@learn-shard-00-00.0kkfa.mongodb.net:27017,learn-shard-00-01.0kkfa.mongodb.net:27017,learn-shard-00-02.0kkfa.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-12b8in-shard-0&authSource=admin&retryWrites=true&w=majority`;

const connectDb = async () => {
  try {
    await mongoose.connect(db, {
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
