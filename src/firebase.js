import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgNe5uDPooIWFpIbdlLymomoGnOq-tVak",
  authDomain: "ig-reels-clone-op.firebaseapp.com",
  projectId: "ig-reels-clone-op",
  storageBucket: "ig-reels-clone-op.appspot.com",
  messagingSenderId: "244580466233",
  appId: "1:244580466233:web:112b93e74ae13d35c597e8",
  measurementId: "G-6EZJYPK1L5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
