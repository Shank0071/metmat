import firebase from "firebase/app";
import 'firebase/firestore'
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNuRKyVm9KWkxlfRUHkBH__LK8aXWSXtc",
    authDomain: "metmat-7e1d5.firebaseapp.com",
    projectId: "metmat-7e1d5",
    storageBucket: "metmat-7e1d5.appspot.com",
    messagingSenderId: "210393885637",
    appId: "1:210393885637:web:10bf6d7f069c171b76b9ac",
    measurementId: "G-ZH543KYZZH"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const db = firebase.firestore()
const auth = firebase.auth()


export { db, auth }
