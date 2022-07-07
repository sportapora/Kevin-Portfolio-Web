import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDDJjqxDwO3_o5zXVsIH7I7hUxuRKiCYkU',
  authDomain: 'web-kevin-3f4fa.firebaseapp.com',
  projectId: 'web-kevin-3f4fa',
  storageBucket: 'web-kevin-3f4fa.appspot.com',
  messagingSenderId: '171251844800',
  appId: '1:171251844800:web:65cef0d7b807ad243c8f25',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
