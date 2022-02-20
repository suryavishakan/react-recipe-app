import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXcq6QgtxXMtjRDMwKnyMOeygFUjvy8C0",
  authDomain: "react-recipe-ninja.firebaseapp.com",
  projectId: "react-recipe-ninja",
  storageBucket: "react-recipe-ninja.appspot.com",
  messagingSenderId: "325747428687",
  appId: "1:325747428687:web:ede033d0def5cf2413093a",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const db = firebase.firestore();

export { db };
