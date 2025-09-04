// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIa26gHHdvwI5vvXF7W_-ul0Rr2XRiArc",
  authDomain: "cbs-goal-tracker.firebaseapp.com",
  projectId: "cbs-goal-tracker",
  storageBucket: "cbs-goal-tracker.firebasestorage.app",
  messagingSenderId: "738729939424",
  appId: "1:738729939424:web:7fb61f30b27d2078e91b85",
  measurementId: "G-SSNMQ0SSDS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
