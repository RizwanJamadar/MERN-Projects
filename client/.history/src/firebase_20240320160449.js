// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIHljA6zuqtvjxLY2w3CWjtApqOXqCt9E",
  authDomain: "smart-leave-2a6b6.firebaseapp.com",
  projectId: "smart-leave-2a6b6",
  storageBucket: "smart-leave-2a6b6.appspot.com",
  messagingSenderId: "310470654452",
  appId: "1:310470654452:web:4e0b45239642278471a1a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
