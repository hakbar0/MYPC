import { firebaseConfig } from "../Config/config.js";
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

export const initFirestore = () => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  return db;
};
