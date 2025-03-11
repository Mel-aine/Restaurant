// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBafa0YuLnJkxK4AJCeeNWtyCZsKr4j3-Q",
    authDomain: "upload-firebase-storage-90674.firebaseapp.com",
    projectId: "upload-firebase-storage-90674",
    storageBucket: "upload-firebase-storage-90674.appspot.com",
    messagingSenderId: "256589565536",
    appId: "1:256589565536:web:6ad77c4447d9d79c1f7d05"
  };

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
