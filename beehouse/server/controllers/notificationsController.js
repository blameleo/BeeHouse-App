const NotificationModel = require("../models/Notifications");

const getNotifications = async (req, res) => {
  const userId = req.params.userId;

  try {
    const notifications = await Notification.find({ userId }).sort({
      timestamp: -1,
    });
    res.json(notifications);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user notifications" });
  }
};

module.exports = { getNotifications };
