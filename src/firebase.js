import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgWu3jifktEtUxe7Ojm8Gej38Cf6wFl_0",
  authDomain: "clone-da42b.firebaseapp.com",
  projectId: "clone-da42b",
  storageBucket: "clone-da42b.appspot.com",
  messagingSenderId: "478897539946",
  appId: "1:478897539946:web:82440aea295f8afd283313",
  measurementId: "G-HM08HD3BBK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
