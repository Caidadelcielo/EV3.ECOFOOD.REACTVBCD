// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzm5onEgK6UhKbGzqoCbijK1qWtN7WGdY",
  authDomain: "ecofood-reactvbcd.firebaseapp.com",
  projectId: "ecofood-reactvbcd",
  storageBucket: "ecofood-reactvbcd.firebasestorage.app",
  messagingSenderId: "778017039120",
  appId: "1:778017039120:web:8a03de9e44045d2519bb95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);