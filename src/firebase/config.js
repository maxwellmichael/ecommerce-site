import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA8vn_CZOuxN3wS-vyJJGUeS3GC1x_ArIM",
  authDomain: "ecommerce-site-c4a58.firebaseapp.com",
  projectId: "ecommerce-site-c4a58",
  storageBucket: "ecommerce-site-c4a58.appspot.com",
  messagingSenderId: "376339577953",
  appId: "1:376339577953:web:b823003fc351e7b13afe20",
  measurementId: "G-NTWJ5FY0DT",
  };

export const reactReduxFirebaseConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {firebase, timestamp, googleAuthProvider};