import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXX",
  authDomain: "eduapp-pwa.firebaseapp.com",
  projectId: "eduapp-pwa",
  storageBucket: "eduapp-pwa.appspot.com",
  messagingSenderId: "XXXXXXXXXX",
  appId: "1:XXXXXXXX:web:XXXXXXXX"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);





