// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-X08Bp5O_KnzmOFQ4O1BxArpe-dpRpEs",
    authDomain: "prepwise-43b2f.firebaseapp.com",
    projectId: "prepwise-43b2f",
    storageBucket: "prepwise-43b2f.firebasestorage.app",
    messagingSenderId: "715041489781",
    appId: "1:715041489781:web:0752068b98df50bba0c93c",
    measurementId: "G-5V74NKJ5V3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
