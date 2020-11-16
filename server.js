const express = require("express");
const session = require("express-session");
const app = express();
app.use(
  session({
    secret: "aqshol",
    resave: false,
    saveUninitialized: true,
  })
);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/admin", (req, res) => {
  res.render("pages/dashboard");
});

app.listen(5000, console.log("server started"));
