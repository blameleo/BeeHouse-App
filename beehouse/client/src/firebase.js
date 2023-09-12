// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPRd-NDGTvkugW7n_ahioXQqHrCJFjjLM",
  authDomain: "beehouse-storage.firebaseapp.com",
  projectId: "beehouse-storage",
  storageBucket: "beehouse-storage.appspot.com",
  messagingSenderId: "951687171518",
  appId: "1:951687171518:web:4d35ee161af09ca3fafdef",
  measurementId: "G-10163GRZXS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
