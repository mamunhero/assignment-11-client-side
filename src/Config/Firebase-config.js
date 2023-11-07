
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";
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


