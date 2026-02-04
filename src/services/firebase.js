import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3w8egcfrH7Q93ah_x5ebVjh1z1KNyScw",
  authDomain: "eduapp-pwa.firebaseapp.com",
  projectId: "eduapp-pwa",
  storageBucket: "eduapp-pwa.appspot.com",
  messagingSenderId: "336407272722",
  appId: "1:336407272722:web:70b850825acdc71657a7cb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
