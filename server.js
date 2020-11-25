const express = require("express");
const session = require("express-session");
const connectDb = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("./routes/admin");
const home = require("./routes/home");
const login = require("./routes/auth");
const notFound = require("./routes/404");
const flash = require("./middleware/FlashMessage");
const auth = require("./middleware/Auth");

const app = express();
app.use(cors());

connectDb();

app.use(
  session({
    secret: "aqshol",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash);
// app.use(auth);

//routes
app.use("/", home);
app.use("/auth", login);
app.use("/admin", admin);
app.use("*", notFound);

app.listen(5000, console.log("server started"));
