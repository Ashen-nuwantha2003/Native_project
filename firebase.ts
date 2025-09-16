
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyAouFuXhM_cbiMpmOhJ5xAzp0rCc5VmVwo",

  authDomain: "cinescope-d10c4.firebaseapp.com",

  projectId: "cinescope-d10c4",

  storageBucket: "cinescope-d10c4.firebasestorage.app",

  messagingSenderId: "879521483737",

  appId: "1:879521483737:web:86ef9e75459843d65f67c8",

  measurementId: "G-FYC9DYVELE"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

// Storage (for book covers if needed)
export const storage = getStorage(app);
