import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDd3HLA8EsMPbGi6rVrWxNzmG-z-CaNBqQ",
  authDomain: "gongbang-763d0.firebaseapp.com",
  projectId: "gongbang-763d0",
  storageBucket: "gongbang-763d0.appspot.com",
  messagingSenderId: "106760881948",
  appId: "1:106760881948:web:2f46b46486d6b6d9969cd9",
  measurementId: "G-ZS4D17T77D",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default { firebaseApp, storage };
