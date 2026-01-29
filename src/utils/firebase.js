// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8k884hL1l4bI6rWkJv8TXztXYohM8UKQ",
  authDomain: "netflixgpt-8c361.firebaseapp.com",
  projectId: "netflixgpt-8c361",
  storageBucket: "netflixgpt-8c361.firebasestorage.app",
  messagingSenderId: "691043411794",
  appId: "1:691043411794:web:3f999b4c75aed4b4fa7c8b",
  measurementId: "G-NF9DZLMPX3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);