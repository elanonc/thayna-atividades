// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb1HqMis5KLicXQ0mVWtIFrM95p577sJs",
  authDomain: "piw-thayna.firebaseapp.com",
  projectId: "piw-thayna",
  storageBucket: "piw-thayna.firebasestorage.app",
  messagingSenderId: "975102904883",
  appId: "1:975102904883:web:24f5aad710c0b56c803146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);