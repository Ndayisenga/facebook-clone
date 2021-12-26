import firebase from 'firebase';
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAxPdPdjrL4EJDBXPDU9iG4y-LytuxgIII",
    authDomain: "facebook-2-yt-ec4de.firebaseapp.com",
    projectId: "facebook-2-yt-ec4de",
    storageBucket: "facebook-2-yt-ec4de.appspot.com",
    messagingSenderId: "945647168424",
    appId: "1:945647168424:web:5958d9c4e12673fd820b9d",
    measurementId: "G-KM44KMKJ1H"
  };
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage =firebase.storage();

  export { db, storage};
