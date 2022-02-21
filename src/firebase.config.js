// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdpWQEeEWbs7D3jf_VCrD5rDuTYsRewVc",
  authDomain: "house-marketplace-app-24b4b.firebaseapp.com",
  projectId: "house-marketplace-app-24b4b",
  storageBucket: "house-marketplace-app-24b4b.appspot.com",
  messagingSenderId: "823727057579",
  appId: "1:823727057579:web:6a265a206ad2a0a60f25ee"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()