import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDLoS_fYLirORKPpO0mZFQDUZQ0vBNjf_o",
    authDomain: "react-9aa33.firebaseapp.com",
    projectId: "react-9aa33",
    storageBucket: "react-9aa33.appspot.com",
    messagingSenderId: "537726581182",
    appId: "1:537726581182:web:e44f1929045505fc6321ef"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db =  firebase.firestore();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export{
     db,
     googleAuthProvider,
     firebase
 }