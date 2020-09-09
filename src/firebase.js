import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDV9NmjJtwC9ER8ikTF_aXA_tjJXqGvCqA",
    authDomain: "clone-f7ab7.firebaseapp.com",
    databaseURL: "https://clone-f7ab7.firebaseio.com",
    projectId: "clone-f7ab7",
    storageBucket: "clone-f7ab7.appspot.com",
    messagingSenderId: "998359840379",
    appId: "1:998359840379:web:ef6c01f943d1962dbd54de"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };