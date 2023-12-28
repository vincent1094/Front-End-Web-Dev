import firebase from "firebase";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCE_S-ghkqawz4hDGWsnUR2RKY_U8AC0mw",
    authDomain: "eshop-a55fa.firebaseapp.com",
    projectId: "eshop-a55fa",
    storageBucket: "eshop-a55fa.appspot.com",
    messagingSenderId: "550954893353",
    appId: "1:550954893353:web:232159e4918f3494af9c38",
    measurementId: "G-LTBSMXJZ06"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };