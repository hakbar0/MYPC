import { initFS, application, initRTDB } from "./Helpers/Connect/initDB.js";
import { signInToFirebase } from "./Helpers/Connect/signInToFirebase.js";
import {
  getCompanies,
  updateCompanyCount,
} from "./Helpers/Firestore/queries.js";
import { pushCompany } from "./Helpers/Firestore/pushCompany.js";
import { lastP, lastS, lastSP, lastR } from "./Helpers/Realtime/getLeads.js";

const app = application();
const dbFS = initFS(app);
const dbRT = initRTDB(app);
await signInToFirebase();

//await lastP(dbRT, dbFS);
await lastS(dbRT, dbFS);
//await lastSP(dbRT);
//await lastR(dbRT);

/*let postcode = "KY9 1JY";
postcode.toUpperCase().replace(/[^\w\s]/gi, "");

await assignSolicitors("test"); */

//await pushCompany(dbFS, "mysolicitor");

//await updateCompanyCount(dbFS, "mysolicitor");
