// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgChbNdWerT0lYEiPNxnkD1B9MKb_68d0",
  authDomain: "clone-1969a.firebaseapp.com",
  projectId: "clone-1969a",
  storageBucket: "clone-1969a.appspot.com",
  messagingSenderId: "566917351844",
  appId: "1:566917351844:web:fa283418c65164609d1931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export{auth}