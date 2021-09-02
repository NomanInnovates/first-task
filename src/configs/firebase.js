import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
// require("firebase/firestore")
// require("firebase/auth")

const firebaseConfig = {
  apiKey: "AIzaSyCFtrWLy_Ghha2M3b8MdEbUwi60Wkks3oc",
  authDomain: "first-task-89e92.firebaseapp.com",
  projectId: "first-task-89e92",
  storageBucket: "first-task-89e92.appspot.com",
  messagingSenderId: "891911497263",
  appId: "1:891911497263:web:74fb036ebd059a6505c8da",
  measurementId: "G-E9T01WCKY7",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
