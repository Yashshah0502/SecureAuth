// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-406d1.firebaseapp.com",
  projectId: "auth-406d1",
  storageBucket: "auth-406d1.firebasestorage.app",
  messagingSenderId: "1000949217489",
  appId: "1:1000949217489:web:29aa00187d486af411edf0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);