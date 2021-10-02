import { collection, getDocs } from "firebase/firestore/lite";
import { initFirestore } from "./Helpers/initFirestore.js";
import { signInToFirebase } from "./Helpers/signInToFirebase.js";

const db = initFirestore();
await signInToFirebase();

const companies = await collection(db, "company");
const companySnapshot = await getDocs(companies);
const companyList = companySnapshot.docs.map((doc) => doc.data());

console.log(companyList);
