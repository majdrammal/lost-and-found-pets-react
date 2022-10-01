import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBC1TwYgxt13ztfFW8RL6miyVapyutHlz0",
  authDomain: "lost-and-found-pets-e446e.firebaseapp.com",
  projectId: "lost-and-found-pets-e446e",
  storageBucket: "lost-and-found-pets-e446e.appspot.com",
  messagingSenderId: "934980460609",
  appId: "1:934980460609:web:8e9b74ac978d2a3359a6c0"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);