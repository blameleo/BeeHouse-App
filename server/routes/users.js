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

router.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.json({ error: "an error occured while fetching users" });
  }
});

router.put("/user", async (req, res) => {
  const formData = req.body;
  console.log(formData);
  // const users = await UserModel.find();

  const query = { user_id: formData.user_id };
  const updatedDocument = {
    $set: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      agencyName: formData.agencyName,
      dob_day: formData.dob_day,
      dob_month: formData.dob_month,
      dob_year: formData.dob_year,
      height: formData.height,
      about: formData.about,
      complexion: formData.complexion,
      telephone: formData.telephone,
      stature: formData.stature,
      businessCerUrl: formData.businessCertUrl,
      idCardUrl: formData.idCardUrl,
      displayPicUrl: formData.displayPicUrl,
      imageUrl1: formData.imageUrl1,
      imageUrl2: formData.imageUrl2,
      imageUrl3: formData.imageUrl3,
      location: formData.location,
    },
  };

  const insertedUser = await UserModel.updateOne(query, updatedDocument);
  res.send(insertedUser);
});

module.exports.userRouter = router;
