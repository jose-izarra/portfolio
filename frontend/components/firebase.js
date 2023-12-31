// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE9yitspgmFaeUfepniLTMHipzc2HsBv0",
  authDomain: "jose-izarra-portfolio.firebaseapp.com",
  projectId: "jose-izarra-portfolio",
  storageBucket: "jose-izarra-portfolio.appspot.com",
  messagingSenderId: "489229374335",
  appId: "1:489229374335:web:1bf11105b00ce58482804a",
  measurementId: "G-RCRTV0NMCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (typeof window !== 'undefined') {
  const analytics = getAnalytics(app);
}

export default app;