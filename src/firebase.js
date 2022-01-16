import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBm1S8MhqncQaQ_eosumWYa7x-j_Wh30_M",
    authDomain: "messenger-app-23b86.firebaseapp.com",
    projectId: "messenger-app-23b86",
    storageBucket: "messenger-app-23b86.appspot.com",
    messagingSenderId: "832687519463",
    appId: "1:832687519463:web:dabbd927e3637d24a6d442",
    measurementId: "G-MVZRX07CD6"
});

const db = firebaseApp.firestore();
export default db;
