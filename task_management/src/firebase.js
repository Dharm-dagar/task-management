import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD0l-S2Ba_b4la2_mMm7yWoaoiAsTycmkQ",
  authDomain: "dark-axe-448218-j2.firebaseapp.com",
  projectId: "dark-axe-448218-j2",
  storageBucket: "dark-axe-448218-j2.firebasestorage.app",
  messagingSenderId: "240185209994",
  appId: "1:240185209994:web:c1829b65e73075746aa973",
  measurementId: "G-NSMF49Y8WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth & Firestore setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
