// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAYukCDnWEwcALT68aUp8Hqc71yldH-cOU",
  authDomain: "signin-ddf0a.firebaseapp.com",
  projectId: "signin-ddf0a",
  storageBucket: "signin-ddf0a.appspot.com",
  messagingSenderId: "1064882539457",
  appId: "1:1064882539457:web:dfa8151ecf0f7b0ab17d40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =  getAuth(app);