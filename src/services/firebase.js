import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdqecMUHaLb6SlljZ6n573rhQ0ujZOtN0",
  authDomain: "skillforge-ai-5cb4f.firebaseapp.com",
  projectId: "skillforge-ai-5cb4f",
  storageBucket: "skillforge-ai-5cb4f.firebasestorage.app",
  messagingSenderId: "586540947646",
  appId: "1:586540947646:web:2283a64355dab2d24f66ef",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
