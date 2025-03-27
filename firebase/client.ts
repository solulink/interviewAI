import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQJqbeLwkDy0rv5SJXpya4TJtWCH98u6M",
  authDomain: "interviewai-19f53.firebaseapp.com",
  projectId: "interviewai-19f53",
  storageBucket: "interviewai-19f53.firebasestorage.app",
  messagingSenderId: "580615740789",
  appId: "1:580615740789:web:1e914e227c72795490c73c",
  measurementId: "G-62611SWBCT"
};

// Initialize Firebase
const app= !getApps.length ? initializeApp(firebaseConfig): getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
