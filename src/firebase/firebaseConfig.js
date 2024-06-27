// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnVVZhnrSA9aN808MWL421neDpBT_iyNQ",
  authDomain: "jobhunt-dbc5e.firebaseapp.com",
  projectId: "jobhunt-dbc5e",
  storageBucket: "jobhunt-dbc5e.appspot.com",
  messagingSenderId: "167570936632",
  appId: "1:167570936632:web:ff4ea1e72f767a25f767cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;