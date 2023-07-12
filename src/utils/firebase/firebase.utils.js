// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9FJf7qPHeKOshY2fRV3b4HC6Gtq-eAHk",
  authDomain: "k-clothing-db-c16c3.firebaseapp.com",
  projectId: "k-clothing-db-c16c3",
  storageBucket: "k-clothing-db-c16c3.appspot.com",
  messagingSenderId: "558388583330",
  appId: "1:558388583330:web:6db0da3c03c59f05d170fb"
};
// k-cloting-store
// const firebaseConfig = {
//   apiKey: "AIzaSyAYWIwcEfA522NjifS0Sg-tAFAleJOjTV0",
//   authDomain: "k-clothing-store.firebaseapp.com",
//   projectId: "k-clothing-store",
//   storageBucket: "k-clothing-store.appspot.com",
//   messagingSenderId: "1013739664846",
//   appId: "1:1013739664846:web:ec88beeaf052d571c4e79f"
// };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const sighInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const sighInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //if user data does not exist
  // create / set the document with the date from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  //if user data exists
  //return userDocRef
  return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
};

export const signOutUser = async () => await signOut(auth);