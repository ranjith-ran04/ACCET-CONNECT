  const express = require("express");
  const router = express.Router();
  const multer = require("multer");
  const uploadExcel = require("./controllers/excelupload/excelupload");

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../uploads"); 
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  const upload = multer({ storage: storage });

  router.post("/excelupload", upload.single("file"),uploadExcel);

  module.exports = router;
