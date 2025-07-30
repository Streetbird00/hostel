// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth,} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdgEdfuJRVReYSt_lhUZbVWh9oy9dsaUk",

  authDomain: "hostelapartments.firebaseapp.com",

  projectId: "hostelapartments",

  storageBucket: "hostelapartments.firebasestorage.app",

  messagingSenderId: "399372748635",

  appId: "1:399372748635:web:998e574cf0a7dfa259fc7e",

  measurementId: "G-LHGMCWX5TB"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);