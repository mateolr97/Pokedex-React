import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZIWPvy0AgrekiZuEqZ-4O00RAr57aX4c",
    authDomain: "pokedex-430d6.firebaseapp.com",
    projectId: "pokedex-430d6",
    storageBucket: "pokedex-430d6.appspot.com",
    messagingSenderId: "491785149457",
    appId: "1:491785149457:web:0c415ad1964177af24a5b0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;