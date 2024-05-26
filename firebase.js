import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9C9Sbiw5YY3BZz6UdgRjVhHMJ9J4Pqfw",
    authDomain: "garson-117f3.firebaseapp.com",
    projectId: "garson-117f3",
    storageBucket: "garson-117f3.appspot.com",
    messagingSenderId: "190395504481",
    appId: "1:190395504481:web:ae65e75d2d5f38e5525720",
    measurementId: "G-XWTJE3K2PY"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);


export const signIn = async (email, password) => {
    // Mail: aek@gmail.com
    // Parola: 123456789
    await signInWithEmailAndPassword(auth, email, password);
}