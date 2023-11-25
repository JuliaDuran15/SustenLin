// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7TrpeITeYGJ8UuCDjJzpHZFD7DUQ9Yos",
  authDomain: "sustenlin.firebaseapp.com",
  projectId: "sustenlin",
  storageBucket: "sustenlin.appspot.com",
  messagingSenderId: "385195127316",
  appId: "1:385195127316:web:fe2a696fe7225103ccad01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, auth,firestore, storage };

