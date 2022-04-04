import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWjfskd4M5MCxETlfwNrDlW0Zb0pT8iVo",
    authDomain: "messenger-app-45ec2.firebaseapp.com",
    projectId: "messenger-app-45ec2",
    storageBucket: "messenger-app-45ec2.appspot.com",
    messagingSenderId: "808187174773",
    appId: "1:808187174773:web:68a71d69d090d57b5c7d3c",
    measurementId: "G-M4VGS5GR59"
});

const db = firebaseApp.firestore();
export default db;
