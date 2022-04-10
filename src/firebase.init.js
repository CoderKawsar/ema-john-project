// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQdJrPxqOrqiNT_aNidWyd1vxnKHUfJz4",
  authDomain: "ema-john-simple-1bed7.firebaseapp.com",
  projectId: "ema-john-simple-1bed7",
  storageBucket: "ema-john-simple-1bed7.appspot.com",
  messagingSenderId: "789417092286",
  appId: "1:789417092286:web:636dd0f60f8ffe7b9f6aef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
