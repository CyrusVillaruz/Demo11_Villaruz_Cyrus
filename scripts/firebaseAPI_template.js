//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyC6Fd56ZfZLBUSvcvQLHCXuQeyPYYq52LQ",

    authDomain: "comp1800-26540.firebaseapp.com",
  
    projectId: "comp1800-26540",
  
    storageBucket: "comp1800-26540.appspot.com",
  
    messagingSenderId: "848674265478",
  
    appId: "1:848674265478:web:a8ee3519163df84280f407"
  
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
