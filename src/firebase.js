import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.React_App_FIREBASE_API_KEY,
  authDomain: process.env.React_App_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.React_App_FIREBASE_PROJECT_ID,
  storageBucket: process.env.React_App_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.React_App_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.React_App_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
