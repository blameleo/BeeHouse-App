const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  modelUserId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }, // ID of the model user who applied
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "jobs", required: true }, // ID of the job being applied for
  status: { type: String, default: "Pending" }, // Status of the application (Pending, Approved, Rejected)
});

const ApplicationModel = mongoose.model("applications", ApplicationSchema);

module.exports = ApplicationModel;
