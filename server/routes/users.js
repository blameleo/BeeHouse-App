const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserModel = require("../models/User.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password, firstName, lastName, type, agencyName, location } =
    req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.json({ message: "user already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new UserModel({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    agencyName,
    location,
    type,
  });
  await newUser.save();
  res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (!user) {
    return res.json({ message: "User doesnt exist" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ message: "Username or password is incorrect" });
  }

  const token = jwt.sign({ id: user._id }, "secret");

  res.json({ token, userID: user._id });
});

module.exports.userRouter = router;
