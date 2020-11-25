const auth = (req, res, next) => {
  console.log(req.session.loggedIn);
  if (!req.session.loggedIn) {
    return res.redirect("/auth/login");
  } else {
  }
  next();
};

module.exports = auth;
