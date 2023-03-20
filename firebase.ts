// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbus_rzs2MaEjcMwNk1V3GZZ7g61hAbkg",
  authDomain: "chat-gpt-clone-9e7b6.firebaseapp.com",
  projectId: "chat-gpt-clone-9e7b6",
  storageBucket: "chat-gpt-clone-9e7b6.appspot.com",
  messagingSenderId: "576768959184",
  appId: "1:576768959184:web:68cba07d1086f98949f4d5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app =getApps().length ? getApp():initializeApp(firebaseConfig)
const db= getFirestore(app)
export {db}
