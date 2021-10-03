import { initFS, application, initRTDB } from "./Helpers/Connect/initDB.js";
import { signInToFirebase } from "./Helpers/Connect/signInToFirebase.js";
import { getCompanies } from "./Helpers/Firestore/getCompanies.js";
import { pushCompany } from "./Helpers/Firestore/pushCompany.js";
import { lastP, lastS, lastSP, lastR } from "./Helpers/Realtime/getLeads.js";

const app = application();
const dbFS = initFS(app);
const dbRT = initRTDB(app);
await signInToFirebase();

await lastP(dbRT);
//await lastS(dbRT);
//await lastSP(dbRT);
//await lastR(dbRT);

/*let postcode = "KY9 1JY";
postcode.toUpperCase().replace(/[^\w\s]/gi, "");

await assignSolicitors("test"); */
