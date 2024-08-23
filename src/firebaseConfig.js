import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiDDxn-ZD7EKb3Vi65jLTvJxEcY8AUnw4",
  authDomain: "messaging-92d1d.firebaseapp.com",
  projectId: "messaging-92d1d",
  storageBucket: "messaging-92d1d.appspot.com",
  messagingSenderId: "3982533529",
  appId: "1:3982533529:web:c69cfc253235ed00896908",
  measurementId: "G-ZYL1E3Z4V0",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
