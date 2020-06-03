import Firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUR3Wj4qqbFPah_EvlIpexuRU7eO4HVv8",
    authDomain: "reactpr-cb074.firebaseapp.com",
    databaseURL: "https://reactpr-cb074.firebaseio.com",
    projectId: "reactpr-cb074",
    storageBucket: "reactpr-cb074.appspot.com",
    messagingSenderId: "250375956540",
    appId: "1:250375956540:web:bf93756168ea70eb95fb39"
};
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
