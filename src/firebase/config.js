import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBLadl_HQsiijIoG0qIKM1s_RMmoRNWn6A",
    authDomain: "olx-react-c5972.firebaseapp.com",
    projectId: "olx-react-c5972",
    storageBucket: "olx-react-c5972.appspot.com",
    messagingSenderId: "755755288096",
    appId: "1:755755288096:web:e03ba540f0767d97525e45",
    measurementId: "G-K1FSJ1DZ8E"
  };

export default firebase.initializeApp(firebaseConfig)