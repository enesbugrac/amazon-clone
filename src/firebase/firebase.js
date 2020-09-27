import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAX7sESnGQ8Ipgv-rfE0yPs50ayUlaqKWY",
  authDomain: "e-clone-71c9a.firebaseapp.com",
  databaseURL: "https://e-clone-71c9a.firebaseio.com",
  projectId: "e-clone-71c9a",
  storageBucket: "e-clone-71c9a.appspot.com",
  messagingSenderId: "266767222793",
  appId: "1:266767222793:web:cf65ebda8870ad9b2250d8",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();

export { firestore, auth };
