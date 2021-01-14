import firebase from "firebase"
import "firebase/firebase-storage"

var firebaseConfig = {
    apiKey: "AIzaSyAwQk-sbfbHzVb64gi-QXk5p-0kaQR4YnA",
    authDomain: "job-finder-7324d.firebaseapp.com",
    projectId: "job-finder-7324d",
    storageBucket: "job-finder-7324d.appspot.com",
    messagingSenderId: "482763371171",
    appId: "1:482763371171:web:6bc6b3c6431bfa78dbc516"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage().ref()

  export default storage