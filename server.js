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

app.get("/", (req, res, next) => {
  console.log(req.session);
  if (!req.session.view) req.session.view = 0;
  req.session.view++;
  res.render("index", { view: req.session.view });
});
app.listen(5000, console.log("server started"));
