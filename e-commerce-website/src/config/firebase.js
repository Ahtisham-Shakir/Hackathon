// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Importing Authentication
import {getAuth} from 'firebase/auth'
// Importing firestore
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqUNvbgIj2ufTZ1IUuZTUAaYp8Md6k29o",
  authDomain: "e-commerce-website-5f446.firebaseapp.com",
  projectId: "e-commerce-website-5f446",
  storageBucket: "e-commerce-website-5f446.appspot.com",
  messagingSenderId: "202220403315",
  appId: "1:202220403315:web:2b4e4089e2881c76474806",
  measurementId: "G-EE1YBD4DP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {firestore, auth} 