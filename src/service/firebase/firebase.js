import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-DXfvUfLAyZLD7n4Cs9weBf7Itfk5FxE",
  authDomain: "proyectocoder-ee51d.firebaseapp.com",
  projectId: "proyectocoder-ee51d",
  storageBucket: "proyectocoder-ee51d.appspot.com",
  messagingSenderId: "114261995939",
  appId: "1:114261995939:web:8ad9535530cf7b64546a16"
};

// Inicialize Firebase
const app = initializeApp(firebaseConfig);

//Inicialize Firestore
export const db = getFirestore(app);