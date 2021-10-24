import { ref, onChildAdded, limitToLast, query } from "firebase/database";
import { jEmailTemp } from "../Email/joinus.js";
import { updateRT } from "./queries.js";
import { sendMail } from "../Email/sendMail.js";
//checks for purchase
export const joinus = async (dbRT) => {
  const pRef = query(ref(dbRT, "joinus/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const lead = snap.val();
    const key = snap.key;
    if (lead.sent !== true) {
      //removes flag
      updateRT(dbRT, key, lead, "joinus");

      // send email template to client
      const clET = jEmailTemp(lead);
      const subject = `Onboarding Request`;
      sendMail(lead.email, subject, clET);
      /////////////////////////////////////
    }
  });
};
