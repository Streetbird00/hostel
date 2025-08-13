// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth,} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM1n9MaaEBSeqv6X07J1LKNR8epuKEZgw",

  authDomain: "hostel-apartments.firebaseapp.com",

  projectId: "hostel-apartments",

  storageBucket: "hostel-apartments.firebasestorage.app",

  messagingSenderId: "666906742312",

  appId: "1:666906742312:web:a27c98128065b13f76af1d",

  measurementId: "G-1D22J2E8W2"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);