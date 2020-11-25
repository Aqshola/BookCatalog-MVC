const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const flash = require("./middleware/FlashMessage");
const cors = require("cors");
const connectDb = require("./config/db");
const admin = require("./routes/admin");
const home = require("./routes/home");
const login = require("./routes/auth");
const notFound = require("./routes/404");

const app = express();
app.use(cors());

//init database//
connectDb();

//init Cookie
app.use(
  session({
    secret: "aqshol",
    resave: false,
    saveUninitialized: true,
  })
);

//Init middleware
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash);

//init routes
app.use("/", home);
app.use("/auth", login);
app.use("/admin", admin);
app.use("*", notFound);

app.listen(5000, console.log("server started"));
