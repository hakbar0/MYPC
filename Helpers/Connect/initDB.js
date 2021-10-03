import { firebaseConfig } from "../../Config/config.js";
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const application = () => {
  const app = initializeApp(firebaseConfig);
  return app;
};

export const initFS = (app) => {
  const dbFireStore = getFirestore(app);
  return dbFireStore;
};

export const initRTDB = (app) => {
  const dbRT = getDatabase(app);
  return dbRT;
};
