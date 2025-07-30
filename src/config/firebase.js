import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyApui0jGAshbiNEFQOMJAw2CsyaQyNIpcE",
  authDomain: "resonant-a8010.firebaseapp.com",
  projectId: "resonant-a8010",
  storageBucket: "resonant-a8010.firebasestorage.app",
  messagingSenderId: "6420223420",
  appId: "1:6420223420:web:57bb689f5df4775b5b87b9",
  measurementId: "G-0LRQT5ELCS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
