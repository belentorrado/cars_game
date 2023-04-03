import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDx81CXmY2siAxKXzn64I36xlH4eIXlvc4",
    authDomain: "ecommerce-site-142b8.firebaseapp.com",
    projectId: "ecommerce-site-142b8",
    storageBucket: "ecommerce-site-142b8.appspot.com",
    messagingSenderId: "1036840971599",
    appId: "1:1036840971599:web:6ae5fa13b61aa30e1b293a",
    measurementId: "G-9HGP13522Q"
  };

firebase.initializeApp(firebaseConfig)

export default firebase