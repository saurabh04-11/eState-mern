// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f4d1f.firebaseapp.com",
  projectId: "mern-estate-f4d1f",
  storageBucket: "mern-estate-f4d1f.appspot.com",
  messagingSenderId: "635567040920",
  appId: "1:635567040920:web:e8b59451c2f21575d5a3ed",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
