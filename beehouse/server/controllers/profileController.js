const UserModel = require("../models/User.js");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dmywtk0vi",
  api_key: "673388561162641",
  api_secret: "lvwzfMj9RVuMgTG7bWPoGHMBBM4",
});
const fs = require("fs").promises;
const util = require("util");

const tempUploadDir = "./temp"; // Adjust the path as needed

// Ensure the temporary directory exists or create it
const mkdir = util.promisify(fs.mkdir);

async function createTempUploadDir() {
  try {
    await mkdir(tempUploadDir);
    console.log("Temporary upload directory created");
  } catch (error) {
    if (error.code === "EEXIST") {
      console.log("Temporary upload directory already exists");
    } else {
      throw error;
    }
  }
}

createTempUploadDir();

const updateUserProfile = async (req, res) => {
  // console.log(req.files);
  try {
    const formData = req.body;
    const userId = formData._id;
    // console.log(formData);

    const fileFields = [
      "displayPicUrl",
      "businessCerUrl",
      "imageUrl1",
      "imageUrl2",
      "imageUrl3",
    ];

    const fileUrls = {};
    const fileUploadPromises = [];
    for (const fieldName of fileFields) {
      if (req.files[fieldName]) {
        // console.log(req.files[fieldName]);
        const uploadedFile = req.files[fieldName][0].buffer;
        const tempFilePath = `${tempUploadDir}/${fieldName}-${Date.now()}.jpg`;

        try {
          // Save the uploaded file to a temporary location on your server's filesystem
          await fs.writeFile(tempFilePath, uploadedFile);

          // Upload the temporary file to Cloudinary
          const uploadResponse = await cloudinary.uploader.upload(
            tempFilePath,
            {
              resource_type: "auto",
            }
          );

          fileUploadPromises.push(uploadResponse);

          // Store the Cloudinary URL in the database
          fileUrls[fieldName] = uploadResponse.secure_url;

          // Remove the temporary file
          fs.unlink(tempFilePath);
        } catch (error) {
          console.error(`Error uploading file for field ${fieldName}:`, error);
        }
      }
    }

    // Update the user's profile with the image URLs in your database
    const query = { _id: userId };
    const updatedDocument = {
      $set: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        agencyName: formData.agencyName,
        gender: formData.gender,
        dob_day: formData.dob_day,
        dob_month: formData.dob_month,
        dob_year: formData.dob_year,
        height: formData.height,
        about: formData.about,
        complexion: formData.complexion,
        telephone: formData.telephone,
        stature: formData.stature,
        location: formData.location,
        ...fileUrls, // Add image URLs to the user's profile
      },
    };

    console.log(fileUrls);

    const insertedUser = await UserModel.findOneAndUpdate(
      query,
      updatedDocument,
      { new: true }
    );

    res.status(201).json({
      message: "User profile updated successfully",
      data: insertedUser,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating user profile" });
  }
};

const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword, _id } = req.body;
    // const query = { user_id: user_id };

    // console.log(query);

    if (!oldPassword || !newPassword || !_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    // const userIdObject = mongoose.Types.ObjectId(user_id);

    const user = await UserModel.findOne({ _id: _id });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compare(oldPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Old password is incorrect" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({ message: "An error occurred" });
  }
};
module.exports = { updateUserProfile, changePassword };
