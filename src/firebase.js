// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8Fi_mjPy1BVeEVDLUsZzhh71pvk5CTCQ",
  authDomain: "fb-clone-e6a20.firebaseapp.com",
  projectId: "fb-clone-e6a20",
  storageBucket: "fb-clone-e6a20.appspot.com",
  messagingSenderId: "53894357882",
  appId: "1:53894357882:web:48e874976d9ba6afaf2cc3",
  measurementId: "G-ZKWEV0K0FC",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
