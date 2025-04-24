// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA54UsBgDqhfHoCu6GhwFXJMWvBSTJAQ7U",
    authDomain: "myntra-user.firebaseapp.com",
    projectId: "myntra-user",
    storageBucket: "myntra-user.firebasestorage.app",
    messagingSenderId: "199086507892",
    appId: "1:199086507892:web:4346ffe9299501bc29ce21"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
