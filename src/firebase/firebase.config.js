// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8EGRcLucpDS5Y_cZ925_HE1ZnZ9_A9yk",
  authDomain: "the-daily-planet-45daa.firebaseapp.com",
  projectId: "the-daily-planet-45daa",
  storageBucket: "the-daily-planet-45daa.firebasestorage.app",
  messagingSenderId: "454840549039",
  appId: "1:454840549039:web:8afb9a2e606747cb9f5e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth