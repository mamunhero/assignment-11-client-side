
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBtWpLtMl9fhsH5VUlVAQVxJ2yv6LZB1c",
  authDomain: "heavenlyhavens-hotel-booking.firebaseapp.com",
  projectId: "heavenlyhavens-hotel-booking",
  storageBucket: "heavenlyhavens-hotel-booking.appspot.com",
  messagingSenderId: "134501530777",
  appId: "1:134501530777:web:a822c113f78dfa82224c08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


