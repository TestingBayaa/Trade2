import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Move these keys into environment variables before deploying to production.
const firebaseConfig = {
  apiKey: "AIzaSyA3a3fawuZbotfYnvpI07YZmcHH3uxL9hs",
  authDomain: "tradogatetester2.firebaseapp.com",
  projectId: "tradogatetester2",
  storageBucket: "tradogatetester2.firebasestorage.app",
  messagingSenderId: "738852588869",
  appId: "1:738852588869:web:59491f812c2518b296022c",
  measurementId: "G-JWNP8KM0LP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication instance used across the app
export const auth = getAuth(app);

export default app;