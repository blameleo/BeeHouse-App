require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { userRouter } = require("./routes/userRoutes");
const { jobRouter } = require("./routes/jobRoutes");
const { applicationRouter } = require("./routes/applicationRoutes");
const cloudinary = require("cloudinary").v2;

const { profileRouter } = require("./routes/profileRoutes");
const { notificationRouter } = require("./routes/notificationRoutes");
const app = express();
const port = 4000;

const corsOptions = {
  origin: "https://beehouse-fynf74cdy-blameleo.vercel.app", // Replace with your frontend's URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Enable cookies and HTTP authentication headers
  optionsSuccessStatus: 204, // No content response to preflight requests
};

app.use(express.json());
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static("public"));
// app.use("/images", express.static("images"));

app.use("/user", userRouter);
app.use("/profile", profileRouter);
app.use("/jobs", jobRouter);
app.use("/jobs", applicationRouter);
app.use("/jobs", notificationRouter);

mongoose.connect(process.env.MONGODB_URL);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
