const UserModel = require("../models/User.js");

const updateUserProfile = async (req, res) => {
  try {
    const formData = req.body;
    const query = { user_id: formData.user_id };

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
      },
    };

    // Handle file uploads
    const fileFields = [
      "displayPicUrl",
      "idCardUrl",
      "businessCerUrl",
      "imageUrl1",
      "imageUrl2",
      "imageUrl3",
    ];

    fileFields.forEach((fieldName) => {
      if (req.files[fieldName]) {
        const fileUrl = req.files[fieldName][0].path;
        updatedDocument.$set[fieldName] = fileUrl;
      }
    });

    const insertedUser = await UserModel.updateOne(query, updatedDocument);
    res
      .status(201)
      .json({ message: "User profile updated", data: insertedUser });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating user profile" });
  }
};

module.exports = { updateUserProfile };
