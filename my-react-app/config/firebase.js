import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: //Use your own API key,
  authDomain: "fir-practise-735b2.firebaseapp.com",
  projectId: "fir-practise-735b2",
  storageBucket: "fir-practise-735b2.appspot.com",
  messagingSenderId: "989819704094",
  appId: "1:989819704094:web:f368bf46259564c963ef0f",
  measurementId: "G-WC2NKDDYH6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)