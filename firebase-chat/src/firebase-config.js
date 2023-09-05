// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpOwja_Zs6QmATIMyjAjgRWejFNP2OA-c",
  authDomain: "chatapp-77448.firebaseapp.com",
  projectId: "chatapp-77448",
  storageBucket: "chatapp-77448.appspot.com",
  messagingSenderId: "1088339362295",
  appId: "1:1088339362295:web:243ed93de3212c9e1feef2",
  measurementId: "G-HZW5LS52C1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
