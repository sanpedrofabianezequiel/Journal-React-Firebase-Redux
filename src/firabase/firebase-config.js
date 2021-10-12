import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//console.log(process.env);
const firebaseConfig = {
    apiKey: "AIzaSyDLoS_fYLirORKPpO0mZFQDUZQ0vBNjf_o",
    authDomain: "react-9aa33.firebaseapp.com",
    projectId: "react-9aa33",
    storageBucket: "react-9aa33.appspot.com",
    messagingSenderId: "537726581182",
    appId: "1:537726581182:web:e44f1929045505fc6321ef"
  };
  
  const firebaseConfigTesting = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain:process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
  };


  //saber que enviaroment estamos
  //console.log(process.env);


  if(process.env.NODE_ENV === 'test'){
    firebase.initializeApp(firebaseConfigTesting);
  }else{
      firebase.initializeApp(firebaseConfig);
  }

  // Initialize Firebase

 const db =  firebase.firestore();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export{
     db,
     googleAuthProvider,
     firebase
 }