import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// Web app Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "image-uploader-80cc2.firebaseapp.com",
  projectId: "image-uploader-80cc2",
  storageBucket: "image-uploader-80cc2.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:352358119155:web:2083a1898f371cd9afa986",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
