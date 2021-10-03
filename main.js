import { initFS, application, initRTDB } from "./Helpers/Connect/initDB.js";
import { signInToFirebase } from "./Helpers/Connect/signInToFirebase.js";
import { getCompanies } from "./Helpers/Firestore/getCompanies.js";
import { pushCompany } from "./Helpers/Firestore/pushCompany.js";
import { ref, onValue } from "firebase/database";

const app = application();
const dbFS = initFS(app);
const dbRT = initRTDB(app);
await signInToFirebase();
//const companyList = await getCompanies(dbFS);
