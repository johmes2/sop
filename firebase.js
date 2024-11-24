// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkhGKUTHuJDSn_ZWDC6oWRPCRy-ta10c0",
    authDomain: "project-1-5b4bd.firebaseapp.com",
    projectId: "project-1-5b4bd",
    storageBucket: "project-1-5b4bd.appspot.com", // Corrected the storage bucket domain
    messagingSenderId: "164037063325",
    appId: "1:164037063325:web:6cd1610f52d25cb5575a74",
    measurementId: "G-LLRRJLBBRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export Firebase instances
export { app, db };

// Initialize Telegram WebApp
const telegram = window.Telegram?.WebApp; // Check if Telegram WebApp is available
if (telegram) {
    telegram.ready();

    // Fetch Telegram User Data
    const user = telegram.initDataUnsafe?.user;

    if (user) {
        // Save User Data to Firestore
        const userData = {
            id: user.id,
            username: user.username || null,
            firstName: user.first_name || null,
            lastName: user.last_name || null,
            dateAdded: new Date().toISOString(),
        };

        // Add user data to Firestore
        const userDocRef = doc(db, "users", user.id.toString());
        setDoc(userDocRef, userData)
            .then(() => {
                console.log("User data saved successfully:", userData);
            })
            .catch((error) => {
                console.error("Error saving user data:", error);
            });
    } else {
        console.warn("No Telegram user data available.");
    }
} else {
    console.warn("Telegram WebApp not detected. Ensure this script runs inside Telegram.");
}
