const ApplicationModel = require("../models/Application.js");

const applyForJob = async (req, res) => {
  try {
    const { modelUserId, jobId } = req.body;
    const newApplication = new ApplicationModel({
      modelUserId,
      jobId,
      // Other application-related fields...
    });
    await newApplication.save();
    res.status(201).json({
      message: "Application submitted successfully",
      data: newApplication,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while submitting the application" });
  }
};

const getApplicationsForAgency = async (req, res) => {
  try {
    // Assuming you have agency user authentication middleware
    const agencyUserId = req.params.id;
    const applications = await ApplicationModel.find({})
      .populate({
        path: "jobId",
        populate: { path: "agencyUserId" }, // Assuming the field name is "agencyUserId"
      })
      .populate("modelUserId");

    const agencyApplications = applications.filter(
      (application) => application.jobId.agencyUserId === agencyUserId
    );
    res.json(agencyApplications);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching applications" });
  }
};

module.exports = { applyForJob, getApplicationsForAgency };
