// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAk7-RbAGUwmtZIn8ERJ-eREF7ZMG78cLc",
    authDomain: "vtataku.firebaseapp.com",
    projectId: "vtataku",
    storageBucket: "vtataku.appspot.com",
    messagingSenderId: "798721846679",
    appId: "1:798721846679:web:c4158fc08812876381a8d2",
};

initializeApp(firebaseConfig);

export const auth = getAuth();