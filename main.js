import { initFS, application, initRTDB } from "./Helpers/Connect/initDB.js";
import { signInToFirebase } from "./Helpers/Connect/signInToFirebase.js";
import { lastP, lastS, lastSP, lastR } from "./Helpers/Realtime/getLeads.js";
import { joinus } from "./Helpers/Realtime/forms.js";
import { callback } from "./Helpers/Realtime/forms.js";

const app = application();
const dbFS = initFS(app);
const dbRT = initRTDB(app);
await signInToFirebase();

await lastP(dbRT, dbFS);
await lastS(dbRT, dbFS);
await lastSP(dbRT, dbFS);
await lastR(dbRT, dbFS);

await joinus(dbRT);
await callback(dbRT);
