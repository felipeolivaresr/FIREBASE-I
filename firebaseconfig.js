// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbXm4zGILbdZNtoi3uq103s72ZMlZZUgE",
  authDomain: "cruddesafioi.firebaseapp.com",
  projectId: "cruddesafioi",
  storageBucket: "cruddesafioi.firebasestorage.app",
  messagingSenderId: "977377270448",
  appId: "1:977377270448:web:c393a50685518f82df7975"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app