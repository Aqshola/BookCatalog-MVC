const auth = (req, res, next) => {
  if (!req.session.loggedIn) {
    return res.redirect("/auth/login");
  } else {
  }
  next();
};

module.exports = auth;
