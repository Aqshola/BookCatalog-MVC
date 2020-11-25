const User = require("../models/user");
const Auth = require("../middleware/Auth");

const getLogin = async (req, res) => {
  res.render("pages/auth/login");
};

const postLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ username });

    if (!user) {
      req.session.message = {
        message: "Invalid Credential",
        type: "danger",
      };

      req.session.loggedIn = false;
      res.redirect("/auth/login");
    } else {
      if (password === user.password) {
        req.session.loggedIn = true;
        res.redirect("/admin");
      } else {
        req.session.loggedIn = false;
        req.session.message = {
          message: "Invalid Credential",
          type: "danger",
        };
        res.redirect("/auth/login");
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const Logout = async (req, res) => {
  req.session.loggedIn = false;
  res.redirect("/auth/login");
};

module.exports = {
  getLogin,
  Logout,
  postLogin,
};
