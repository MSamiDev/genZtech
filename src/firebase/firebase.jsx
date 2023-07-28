// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
// TODO:  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAADI6w6QzIPBQvKwBmJk6zVBZeV3ercns",
  authDomain: "genztech-c2db6.firebaseapp.com",
  projectId: "genztech-c2db6",
  storageBucket: "genztech-c2db6.appspot.com",
  messagingSenderId: "386197957830",
  appId: "1:386197957830:web:f1d1ddd9a070c976303bc7",
  measurementId: "G-9SN00HW3NP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const analytics = getAnalytics(app);
export {db, auth};
export default app;
