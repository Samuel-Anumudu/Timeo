import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE3-gXv5hrlyt0gFrzUCIk1OUuJgremRo",
  authDomain: "timeo-react-native.firebaseapp.com",
  projectId: "timeo-react-native",
  storageBucket: "timeo-react-native.appspot.com",
  messagingSenderId: "674933005029",
  appId: "1:674933005029:web:182b5e514b5c6fe310520c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
