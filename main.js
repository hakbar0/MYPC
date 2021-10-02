import { initFirestore } from "./Helpers/initFirestore.js";
import { signInToFirebase } from "./Helpers/signInToFirebase.js";
import { getCompanies } from "./Helpers/getCompanies.js";
import { pushCompany } from "./Helpers/pushCompany.js";

const db = initFirestore();
await signInToFirebase();
const companyList = await getCompanies(db);
await pushCompany(db);
