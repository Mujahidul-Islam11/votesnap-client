// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcKBzHQi56mFZJY3Xj8f5pbcQLLI3ZDJE",
  authDomain: "car-doctor-bc7cb.firebaseapp.com",
  projectId: "car-doctor-bc7cb",
  storageBucket: "car-doctor-bc7cb.appspot.com",
  messagingSenderId: "869717036573",
  appId: "1:869717036573:web:3e14096af5b050653e00f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app