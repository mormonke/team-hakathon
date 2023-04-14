// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXlFk2ijedo1IjjyJVWZCQjehg8Fe284w",
  authDomain: "team-hakaton.firebaseapp.com",
  projectId: "team-hakaton",
  storageBucket: "team-hakaton.appspot.com",
  messagingSenderId: "931380070333",
  appId: "1:931380070333:web:6867355ec1782b9bb874d4",
  measurementId: "G-N7QHSDY9P0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
