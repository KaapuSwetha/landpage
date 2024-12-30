// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYoITVXhOvZml6nxTNczS9RxjIkTvQ9PY",
  authDomain: "landingpage-3d1e9.firebaseapp.com",
  projectId: "landingpage-3d1e9",
  storageBucket: "landingpage-3d1e9.firebasestorage.app",
  messagingSenderId: "1088459208844",
  appId: "1:1088459208844:web:261d43d157e11a77a663a9",
  measurementId: "G-10NDR17P1C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
