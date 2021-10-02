import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { firebaseConfig, authentication } from "./Config/config.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const { email, password } = authentication;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//need to authetnicate before querying
const auth = getAuth();
const user = await signInWithEmailAndPassword(auth, email, password);

const companies = await collection(db, "company");
const companySnapshot = await getDocs(companies);
const companyList = companySnapshot.docs.map((doc) => doc.data());
console.log(companyList);
