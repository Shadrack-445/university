// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqiZWrUkBbq6Sw2kDMBQ3ak6Yn0WY-Hbg",
  authDomain: "university-f016a.firebaseapp.com",
  projectId: "university-f016a",
  storageBucket: "university-f016a.firebasestorage.app",
  messagingSenderId: "877528331577",
  appId: "1:877528331577:web:4e1cc16bcb80485a7ba4e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)