import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6nETd5mEyeyDtNQtyMGXZ_EJ0txLLOxk",
  authDomain: "supplymesh-x-ai.firebaseapp.com",
  projectId: "supplymesh-x-ai",
  storageBucket: "supplymesh-x-ai.firebasestorage.app",
  messagingSenderId: "826993610716",
  appId: "1:826993610716:web:28cb9cc7fbd09edc608919",
  measurementId: "G-E2ZHJGRJM3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export const loginDemoUser = () => signInAnonymously(auth);

