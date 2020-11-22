const config = {
  storageConfig: {
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
      cb(null, Date.now() + file.originalname);
    },
  },
};

module.exports = config;
