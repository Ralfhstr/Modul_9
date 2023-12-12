import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyA1M2gX7iY8y7PND_ca_x0xZzPNgMfhwUA",
    authDomain: "noteapp-4bc95.firebaseapp.com",
    projectId: "noteapp-4bc95",
    storageBucket: "noteapp-4bc95.appspot.com",
    messagingSenderId: "171737665940",
    appId: "1:171737665940:web:f0cc8fc3a2db29e054ff81"
});

const FIREBASE = firebase;

export default FIREBASE;
