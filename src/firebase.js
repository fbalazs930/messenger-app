import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA4cevAHQIxngdCqeUrDAYOH9xoOFzQrKI",
    authDomain: "messenger-app-6161b.firebaseapp.com",
    projectId: "messenger-app-6161b",
    storageBucket: "messenger-app-6161b.appspot.com",
    messagingSenderId: "705293279160",
    appId: "1:705293279160:web:55183645b97b521819794d",
    measurementId: "G-BS4ZW9PRN2"
});

const db = firebaseApp.firestore();
export default db;