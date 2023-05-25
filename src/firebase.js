// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  push,
  child,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALjfJ2ogMusoywAB5NCVi3rbN4kqV2lZg",
  authDomain: "my-projects-4fc97.firebaseapp.com",
  databaseURL: "https://my-projects-4fc97-default-rtdb.firebaseio.com",
  projectId: "my-projects-4fc97",
  storageBucket: "my-projects-4fc97.appspot.com",
  messagingSenderId: "642117591202",
  appId: "1:642117591202:web:73e43b8b71ef16d28cb7fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
export const db = getDatabase(app);