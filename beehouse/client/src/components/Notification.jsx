import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchNotificationSuccess,
  unreadNotificationsCount,
  markNotificationAsRead,
} from "../Redux/slice/notificationsSlice";

function Notification({ isVisible, toggleNotification }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const notifications = useSelector(
    (state) => state.notification.notifications
  );

  console.log(notifications);

  const getNotifications = async () => {
    console.log("test");
    try {
      const response = await axios.get(
        `http://localhost:4000/jobs/notifications/${user?._id}`
      );
      console.log(response.data.unreadCount);
      dispatch(fetchNotificationSuccess(response.data.notifications));
      dispatch(unreadNotificationsCount(response.data.unreadCount));
    } catch (error) {}
  };

  const handleNotificationClick = async (notificationId) => {
    // dispatch(markNotificationAsRead({ notificationId }));
    try {
      // Send an HTTP request to your server to update the read status
      await axios.put(
        `http://localhost:4000/jobs/notifications/${notificationId}`,
        {
          read: true,
        }
      );

      getNotifications();
      // Optionally, you can handle success or error responses here
    } catch (error) {
      // Handle any errors that occur during the HTTP request
      console.error("Error updating notification read status:", error);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className="absolute border border-black">
      {/* <button
        onClick={toggleNotification}
        className="bg-blue-500 text-white px-4 py-2 rounded border"
      >
        Show Notification
      </button> */}

      {isVisible && (
        <div
          className={`${
            isVisible ? "right-0 " : "-right-full "
          } fixed top-0 w-72 h-screen bg-black overflow-y-scroll px-3  bg-opacity-40 backdrop-blur-md shadow-md transition ease transform duration-300`}
        >
          <div className="flex items-center justify-between pt-3 px-3">
            {/* Your notification content goes here */}

            <p className="text-lg font-bold text-white text-center">
              Notifications
            </p>

            <p
              className=" text-red-600 cursor-pointer text-lg "
              onClick={toggleNotification}
            >
              x
            </p>
          </div>
          <ul className="">
            {notifications?.map((notification) => {
              return (
                <li
                  key={notification._id}
                  className={`border-b border-gray-300 flex items-center cursor-pointer h-24 ${
                    notification.isRead || notification.read
                      ? "text-gray-500"
                      : "text-white"
                  }`}
                  onClick={() => handleNotificationClick(notification._id)}
                >
                  {notification.message}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Notification;
