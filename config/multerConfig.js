const fs = require("fs");

const config = {
  storageConfig: {
    destination: (req, file, cb) => {
      if (!fs.existsSync("uploads")) {
        fs.mkdirSync("uploads");
      }
      cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname);
    },
  },
};

module.exports = config;
