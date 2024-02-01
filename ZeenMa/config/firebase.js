import { initializeApp } from "firebase/app";
import { initializeAuth, createUserWithEmailAndPassword, onAuthStateChanged, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqDztzGxBbbmo9iQM18QinmOXiSEB_Dgk",
  authDomain: "zeenma-96b58.firebaseapp.com",
  projectId: "zeenma-96b58",
  storageBucket: "zeenma-96b58.appspot.com",
  messagingSenderId: "436851844859",
  appId: "1:436851844859:web:cf160654bdd49d520b325e",
  measurementId: "G-XKYQG6NJXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const firestore = getFirestore(app);

export { app, auth, createUserWithEmailAndPassword, firestore, onAuthStateChanged};
