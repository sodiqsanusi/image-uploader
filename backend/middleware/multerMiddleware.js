const multer = require("multer");
const path = require("path");


const storageEngine = multer.diskStorage({
  destination: "../uploads/images",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`)
  },
})

const checkFileType = (file, cb) => {
  //* The file extensions that will be allowed for upload
  let acceptedFiles = /jpeg|png|jpg|gif|svg/;
  //* Check that thhe uploaded file matches one of the accepted file extensions
  let isFileAllowed = acceptedFiles.test(path.extname(file.originalname).toLowerCase());
  //* Confirm the file extension (extension names can be tampered with manually)
  let doesMimeMatch = acceptedFiles.test(file.mimetype);

  if (isFileAllowed && doesMimeMatch) {
    return cb(null, true)
  } else {
    cb("Error: You can only upload images! Try uploading a different file.")
  }
}

const upload = multer({
  storage: storageEngine,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
})

module.exports = upload;