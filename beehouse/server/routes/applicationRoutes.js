const express = require("express");
const router = express.Router();
const {
  applyForJob,
  getApplicationsForAgency,
} = require("../controllers/applicationController");

router.post("/apply", applyForJob);
router.get("/model/applications/:id", getApplicationsForAgency);

module.exports = { applicationRouter: router };
