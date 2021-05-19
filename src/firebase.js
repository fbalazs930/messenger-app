import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA-Yxmc3Wrh23RBVFnMS7J6jQnBA0FP5Wk",
    authDomain: "messenger-app-fb.firebaseapp.com",
    projectId: "messenger-app-fb",
    storageBucket: "messenger-app-fb.appspot.com",
    messagingSenderId: "301382312978",
    appId: "1:301382312978:web:b1cfef02462469c659e4cb",
    measurementId: "G-YLKV4BMYRV"
});

const db = firebaseApp.firestore();
export default db;