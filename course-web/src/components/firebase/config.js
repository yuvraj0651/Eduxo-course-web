// Import core and auth functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; 

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDigfyNt1PBkhK7rtjTZhprlGFv6bChWJY",
    authDomain: "course-ecom-web01.firebaseapp.com",
    projectId: "course-ecom-web01",
    storageBucket: "course-ecom-web01.appspot.com",
    messagingSenderId: "858122004827",
    appId: "1:858122004827:web:5d7f7d2412a360ec5d927e",
    measurementId: "G-WD3GYZ2D68",

    // ✅ Required for Realtime Database
    databaseURL: "https://course-ecom-web01-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: analytics
const analytics = getAnalytics(app);

// ✅ Initialize auth and database
const auth = getAuth(app);
const db = getDatabase(app);

// ✅ Export properly
export { auth, db };
export default app;
