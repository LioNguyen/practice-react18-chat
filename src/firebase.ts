// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC2vGms6pd7IYotDhmpQu94rTks6X-7XB4",
  authDomain: "lio-chat-2.firebaseapp.com",
  projectId: "lio-chat-2",
  storageBucket: "lio-chat-2.appspot.com",
  messagingSenderId: "331712745239",
  appId: "1:331712745239:web:be0657c0dfad7f903f3152",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
