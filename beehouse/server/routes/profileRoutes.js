const express = require("express");
const multer = require("multer");
const { updateUserProfile } = require("../controllers/profileController");
const path = require("path");

const router = express.Router();
// app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    console.log(file);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extname = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname);
  },
});

const upload = multer({ storage: storage });

router.put(
  "/user",
  upload.fields([
    { name: "displayPicUrl", maxCount: 1 }, // One file for displayPicUrl field
    { name: "businessCerUrl", maxCount: 1 }, // One file for idCardUrl field
    { name: "imageUrl1", maxCount: 1 },
    { name: "imageUrl2", maxCount: 1 },
    { name: "imageUrl3", maxCount: 1 }, // One file for imageUrl1 field
  ]),
  updateUserProfile
);

module.exports = { profileRouter: router };
