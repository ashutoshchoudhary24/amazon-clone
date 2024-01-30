	
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD_wqjPbCUEeJmLR9roa9grNAZnoriBBxE",
    authDomain: "clone-66b50.firebaseapp.com",
    projectId: "clone-66b50",
    storageBucket: "clone-66b50.appspot.com",
    messagingSenderId: "1044051746382",
    appId: "1:1044051746382:web:8f577b6e10bd861e312d1f",
    measurementId: "G-XYD3JFHK4H"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth }