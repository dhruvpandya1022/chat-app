import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaCndPIgQ-87J9eAGLHCQs19Iiv9UaWio",
  authDomain: "chat-notification-d636d.firebaseapp.com",
  projectId: "chat-notification-d636d",
  storageBucket: "chat-notification-d636d.appspot.com",
  messagingSenderId: "685383417299",
  appId: "1:685383417299:web:b0aa7b79a9679a48fec326",
  measurementId: "G-YXKJL44MNL"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();