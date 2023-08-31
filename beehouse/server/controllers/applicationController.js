const ApplicationModel = require("../models/Application.js");

const applyForJob = async (req, res) => {
  try {
    const { modelUserId, jobId } = req.body;
    // console.log(modelUserId + " " + jobId);
    const newApplication = new ApplicationModel({
      modelUserId,
      jobId,
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

    // console.log(agencyUserId);
    const applications = await ApplicationModel.find({})
      .populate({
        path: "jobId",
        populate: { path: "agencyUserId" }, // Assuming the field name is "agencyUserId"
      })
      .populate("modelUserId");

    const agencyApplications = applications.filter((application) => {
      const jobId = application.jobId;
      const modelUserId = application.modelUserId;
      const jobMatchesAgency = jobId && jobId.agencyUserId === agencyUserId;
      const modelApplied = modelUserId !== null;
      return jobMatchesAgency && modelApplied;
    });
    res.json(agencyApplications);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching applications" });
  }
};

module.exports = { applyForJob, getApplicationsForAgency };
