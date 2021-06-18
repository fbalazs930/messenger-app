import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBojXxEz5lOXbzTr7ym2tICSXtPhsBIHKA",
    authDomain: "messenger-app-fb-dbe97.firebaseapp.com",
    projectId: "messenger-app-fb-dbe97",
    storageBucket: "messenger-app-fb-dbe97.appspot.com",
    messagingSenderId: "90681988714",
    appId: "1:90681988714:web:2311c223181570f7ee9c13",
    measurementId: "G-1YVZN8QTLE"
});

const db = firebaseApp.firestore();
export default db;