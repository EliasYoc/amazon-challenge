import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDk46MpIOgwNufvfGOnXs9HmKlxyKwbjQk",
  authDomain: "challenge-e5c30.firebaseapp.com",
  projectId: "challenge-e5c30",
  storageBucket: "challenge-e5c30.appspot.com",
  messagingSenderId: "661036887076",
  appId: "1:661036887076:web:43dab2b2f04c7ceb143cb1",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };
// console.log(firebase);
