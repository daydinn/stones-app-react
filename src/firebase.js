// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUi2DnOv4BudDSa2un_2yT3EdXHMYsho4",
  authDomain: "stones-app-react.firebaseapp.com",
  projectId: "stones-app-react",
  storageBucket: "stones-app-react.appspot.com",
  messagingSenderId: "965405937590",
  appId: "1:965405937590:web:22c5c9a0fc255a6b993b17"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()