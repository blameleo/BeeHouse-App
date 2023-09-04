const express = require("express");
const { getNotifications } = require("../controllers/notificationsController");

const router = express.Router();

router.get("/notifications/:id", getNotifications);

module.exports = { notificationRouter: router };
