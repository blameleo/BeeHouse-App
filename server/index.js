require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/users.js");
// import { userRouter } from "./routes/users.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
// app.use("/images", express.static("images"));
app.use("/", userRouter);

mongoose.connect(process.env.MONGODB_URL);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
