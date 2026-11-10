
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfR4UPXGCBOCdqlQsHaPUGapSXpDAk0_0",
  authDomain: "whispo-8775a.firebaseapp.com",
  projectId: "whispo-8775a",
  storageBucket: "whispo-8775a.firebasestorage.app",
  messagingSenderId: "1065761027137",
  appId: "1:1065761027137:web:ade66af953e9aaa7e2c2c0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
