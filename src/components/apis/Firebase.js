import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbJeB2ZTZmTkDpY_rHKFdIPtqCbtMx3Ss",
  authDomain: "todo-app-327de.firebaseapp.com",
  projectId: "todo-app-327de",
  storageBucket: "todo-app-327de.appspot.com",
  messagingSenderId: "529681431115",
  appId: "1:529681431115:web:7f77f2ce965f3dfc676bce",
  measurementId: "G-GV1ZFT250E",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export let auth = getAuth(firebaseApp);

