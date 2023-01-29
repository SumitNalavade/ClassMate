// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxnDuSKwrBcPKghe97kXdikI2oF_6C5ms",
  authDomain: "classmate-376118.firebaseapp.com",
  projectId: "classmate-376118",
  storageBucket: "classmate-376118.appspot.com",
  messagingSenderId: "310208965525",
  appId: "1:310208965525:web:29aceb3bc5cf8d8f49249c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export default app;
export { auth, db }