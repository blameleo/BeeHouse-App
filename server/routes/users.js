const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

const UserModel = require("../models/User.js");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { email, password, type } = req.body;
  const user = await UserModel.findOne({ email });
  if (user) {
    return res.json({ message: "user already exists!" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const generatedUserId = uuidv4();
  const newUser = new UserModel({
    user_id: generatedUserId,
    email,
    password: hashedPassword,
    type,
  });
  await newUser.save();

  const token = jwt.sign(newUser.toJSON(), "secret");
  res.json({
    token,
    userId: generatedUserId,
    email: email,
    message: "User registered successfully",
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  console.log(user);
  if (!user) {
    return res.json({ message: "User doesnt exist" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ message: "Username or password is incorrect" });
  }

  const token = jwt.sign(user.toJSON(), "secret");

  res.json({ token, userId: user.user_id, email, type: user.type });
});

module.exports.userRouter = router;
