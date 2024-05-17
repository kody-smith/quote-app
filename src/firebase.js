// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2odS8bHdhFh0BobqZFQ8S-_7EAlE4PPg",
  authDomain: "quote-app-56de1.firebaseapp.com",
  projectId: "quote-app-56de1",
  storageBucket: "quote-app-56de1.appspot.com",
  messagingSenderId: "846664821395",
  appId: "1:846664821395:web:fc649ea2a3ba2e04b2fb66"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();