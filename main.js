import { initFirestore } from "./Helpers/initFirestore.js";
import { signInToFirebase } from "./Helpers/signInToFirebase.js";
import { getCompanies } from "./Helpers/getCompanies.js";

const db = initFirestore();
await signInToFirebase();
const companyList = await getCompanies(db);
console.log(companyList);
