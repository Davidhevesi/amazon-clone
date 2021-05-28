import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBNRRqnfivY_isghLAhM7g2_2R6bsuKPwc",
  authDomain: "clone-15418.firebaseapp.com",
  projectId: "clone-15418",
  storageBucket: "clone-15418.appspot.com",
  messagingSenderId: "203246412082",
  appId: "1:203246412082:web:c8c69f7349b7f035e0772b",
  measurementId: "G-PNZBXHXT06",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
