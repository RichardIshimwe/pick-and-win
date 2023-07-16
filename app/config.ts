// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcsBtW7WLba_yj1Aq85I4Wvzjep6-RJ2g",
  authDomain: "next-js-profect.firebaseapp.com",
  databaseURL: "https://next-js-profect-default-rtdb.firebaseio.com",
  projectId: "next-js-profect",
  storageBucket: "next-js-profect.appspot.com",
  messagingSenderId: "846552506111",
  appId: "1:846552506111:web:55b5ce0bdfd36813f4f6ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
