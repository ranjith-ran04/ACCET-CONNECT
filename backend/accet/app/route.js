const express = require("express");
const router = express.Router();
const multer = require("multer");
const uploadExcel = require("./controllers/uploadexcel");
const alumnireg = require("./controllers/alumniform/alumnireg");
const path=require("path");
// Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../uploads"); // folder to save uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/alumniform",alumnireg);
router.post("/excelupload", upload.single("file"),uploadExcel);

module.exports = router;
