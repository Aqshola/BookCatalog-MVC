const express = require("express");
const session = require("express-session");
const connectDb = require("./config/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("./routes/admin");
const home = require("./routes/home");
const flash = require("./middleware/FlashMessage");

const app = express();
app.use(
  session({
    secret: "rahasia",
    cookie: { maxAge: null },
    resave: false,
    saveUninitialized: true,
  })
);
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
app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash);

//routes
app.use("/", home);
app.use("/admin", admin);

app.listen(5000, console.log("server started"));
