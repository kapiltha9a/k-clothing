// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithRedirect, sighInWithPopup, GoogleAuthProvider, } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9FJf7qPHeKOshY2fRV3b4HC6Gtq-eAHk",
  authDomain: "k-clothing-db-c16c3.firebaseapp.com",
  projectId: "k-clothing-db-c16c3",
  storageBucket: "k-clothing-db-c16c3.appspot.com",
  messagingSenderId: "558388583330",
  appId: "1:558388583330:web:6db0da3c03c59f05d170fb"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

