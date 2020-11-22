const multer = require("multer");
const multerConfig = require("../config/multerConfig");

const storage = multer.diskStorage(multerConfig.storageConfig);
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter }).single(
  "bookCover"
);

module.exports = upload;
