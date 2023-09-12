const express = require("express");
const multer = require("multer");
const {
  updateUserProfile,
  changePassword,
} = require("../controllers/profileController");

const router = express.Router();
const storage = multer.memoryStorage(); // Use memory storage for storing files in memory
const upload = multer({ storage: storage });
// console.log(upload.storage);

router.put(
  "/user",
  upload.fields([
    { name: "displayPicUrl", maxCount: 1 },
    { name: "businessCerUrl", maxCount: 1 },
    { name: "imageUrl1", maxCount: 1 },
    { name: "imageUrl2", maxCount: 1 },
    { name: "imageUrl3", maxCount: 1 },
  ]),
  updateUserProfile
);

router.post("/changepassword", changePassword);

module.exports = { profileRouter: router };
