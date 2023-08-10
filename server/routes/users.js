const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserModel = require("../models/User.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.json({ message: "user already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({ email, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User registered successfully" });
});

router.post("/login");

module.exports.userRouter = router;
