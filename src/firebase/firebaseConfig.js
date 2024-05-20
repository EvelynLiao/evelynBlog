// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJt_5Coaewi9TDeeb8M0t_yrv72-Khl8M",
  authDomain: "evelynuxf.firebaseapp.com",
  projectId: "evelynuxf",
  storageBucket: "evelynuxf.appspot.com",
  messagingSenderId: "933105928167",
  appId: "1:933105928167:web:2c2f0b975b785c37635f42",
  measurementId: "G-64D3EMK8GJ",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
