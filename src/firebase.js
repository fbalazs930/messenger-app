import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAHFcianzVQbsc6UHLZCce84tk33uj2eq4",
    authDomain: "messenger-app-ce43f.firebaseapp.com",
    projectId: "messenger-app-ce43f",
    storageBucket: "messenger-app-ce43f.appspot.com",
    messagingSenderId: "829086053478",
    appId: "1:829086053478:web:e21b4717964d14f0ba69a7",
    measurementId: "G-7PF4QE4Z6V"
});

const db = firebaseApp.firestore();
export default db;
