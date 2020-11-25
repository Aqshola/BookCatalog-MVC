const getNotFound = (req, res) => {
  res.render("pages/nopage/404");
};

module.exports = {
  getNotFound,
};
