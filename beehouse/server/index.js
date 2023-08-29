require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/userRoutes");
const { jobRouter } = require("./routes/jobRoutes");

const { profileRouter } = require("./routes/profileRoutes");
const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
// app.use("/images", express.static("images"));

app.use("/user", userRouter);
app.use("/profile", profileRouter);
app.use("/jobs", jobRouter);

mongoose.connect(process.env.MONGODB_URL);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
