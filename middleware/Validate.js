const Validation = (req, res, next) => {
  console.log(req.body);
  const { title, price } = req.body;

  if (
    !title ||
    title === " " ||
    title === "" ||
    !price ||
    price === " " ||
    price === ""
  ) {
    req.session.message = {
      message: "Title, type and price cannot empty",
      type: "danger",
    };
    res.redirect(req.originalUrl);
  } else {
    next();
  }
};

module.exports = Validation;
