const express = require("express");
const {
  getNotifications,
  updateReadStatus,
} = require("../controllers/notificationsController");

const router = express.Router();

router.get("/notifications/:id", getNotifications);
router.put("/notifications/:id", updateReadStatus);

module.exports = { notificationRouter: router };
