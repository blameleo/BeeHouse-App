const JobModel = require("../models/Jobs");

const createJob = async (req, res) => {
  try {
    const {
      agencyUserId,
      description,
      stature,
      complexion,
      gender,
      agencyName,
      tags,
      price,
      location,
    } = req.body;

    console.log(tags);
    const newJob = new JobModel({
      agencyUserId,
      description,
      stature,
      agencyName,
      complexion,
      gender,
      tags,
      price,
      location,
    });
    await newJob.save();
    res.status(201).json({ message: "Job created successfully", data: newJob });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while creating the job" });
  }
};

const getJobsForModels = async (req, res) => {
  try {
    const jobs = await JobModel.find().populate("agencyUserId", "agencyName");
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching jobs" });
  }
};

const updateJob = async (req, res) => {
  try {
    const formData = req.body;

    console.log(formData);
    const query = { agencyId: formData._id };
    const updatedDocument = {
      $set: {
        description: formData.description,
        gender: formData.gender,
        stature: formData.stature,
        complexion: formData.complexion,
        tags: formData.tags,
      },
    };
    const insertedJob = await JobModel.findOneAndUpdate(
      query,
      updatedDocument,
      { new: true }
    );
    res.status(201).json({
      message: "Job updated successfully",
      data: insertedJob,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while updating job" });
  }
};

module.exports = { createJob, getJobsForModels, updateJob };
