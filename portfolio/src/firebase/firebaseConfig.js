// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFZ4kXXdFiGrV2ccJHm_GIZc-J3ANKj6Y",
  authDomain: "portfolio-66e4c.firebaseapp.com",
  projectId: "portfolio-66e4c",
  storageBucket: "portfolio-66e4c.appspot.com",
  messagingSenderId: "573547132258",
  appId: "1:573547132258:web:63e81d1638ca0a1b27683b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);