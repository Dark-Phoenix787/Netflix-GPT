// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeKy5K4YLgKCcoDc-yFaHhc5dTfaC1cgY",
  authDomain: "netflix-gpt-f94e2.firebaseapp.com",
  projectId: "netflix-gpt-f94e2",
  storageBucket: "netflix-gpt-f94e2.appspot.com",
  messagingSenderId: "1005265119772",
  appId: "1:1005265119772:web:6c1fcf49dbe829ec9ecdd9",
  measurementId: "G-G5FVZH47FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();