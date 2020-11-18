const getBookHome = async (req, res) => {
  res.render("pages/index");
};

module.exports = {
  getBookHome,
};
