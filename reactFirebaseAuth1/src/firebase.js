// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxlgMC7_x4yssa8lB3ueT3IR3IvUkDt_A",
  authDomain: "reactfirebase-131ae.firebaseapp.com",
  projectId: "reactfirebase-131ae",
  storageBucket: "reactfirebase-131ae.appspot.com",
  messagingSenderId: "860527833416",
  appId: "1:860527833416:web:3b3f00df58fb39cc78037d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);