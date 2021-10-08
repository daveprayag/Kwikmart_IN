import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAcJMLESaM-Fhtqf945_arSvwYYqr_dJHs",
  authDomain: "kwikmart-fc235.firebaseapp.com",
  databaseURL: "https://kwikmart-fc235-default-rtdb.firebaseio.com",
  projectId: "kwikmart-fc235",
  storageBucket: "kwikmart-fc235.appspot.com",
  messagingSenderId: "493768497597",
  appId: "1:493768497597:web:224131f76aeec3d0ca1ad4",
  measurementId: "G-76EGPDXWML",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, firebase };
