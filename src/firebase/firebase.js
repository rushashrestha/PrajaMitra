// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlMfVofoNL6b4cyVl9_4wwLFldr3gf8eo",
  authDomain: "egovernance-d4efe.firebaseapp.com",
  projectId: "egovernance-d4efe",
  storageBucket: "egovernance-d4efe.firebasestorage.app",
  messagingSenderId: "88326298454",
  appId: "1:88326298454:web:775f94055faa43676214f7",
  measurementId: "G-ZDJHHNBTSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export{auth, app, db};