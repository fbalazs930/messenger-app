import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBaLxq158vZurQzDaFsTGsDIHRY8rJYmH0",
    authDomain: "messenger-app-fb-d50ea.firebaseapp.com",
    projectId: "messenger-app-fb-d50ea",
    storageBucket: "messenger-app-fb-d50ea.appspot.com",
    messagingSenderId: "813473797920",
    appId: "1:813473797920:web:d086d5ba438dee1fc6a945",
    measurementId: "G-3N701H1XSZ"
});

const db = firebaseApp.firestore();
export default db;