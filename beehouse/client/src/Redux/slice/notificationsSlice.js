import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: null,
  newNotificationsCount: 0,
  newNotif: 0,
  loading: false,
  error: null,
};

const notificationsSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    fetchNotificationStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchNotificationSuccess(state, action) {
      state.loading = false;
      state.notifications = action.payload;
    },
    fetchNotificationFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    unreadNotificationsCount(state, action) {
      console.log(action.payload);
      state.newNotificationsCount = action.payload;
    },

    markNotificationAsRead(state, action) {
      const { notificationId } = action.payload;
      // Find the notification by ID and mark it as read
      const notificationToMark = state.notifications.find(
        (notification) => notification._id === notificationId
      );
      if (notificationToMark) {
        notificationToMark.read = true;
        // Decrease newNotificationsCount
        state.newNotif -= 1;
      }
    },
  },
});

export const {
  fetchNotificationStart,
  fetchNotificationSuccess,
  fetchNotificationFailure,
  markNotificationAsRead,
  unreadNotificationsCount,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
