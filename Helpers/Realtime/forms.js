import { ref, onChildAdded, limitToLast, query } from "firebase/database";
import { jEmailTemp } from "../Email/joinus.js";
import { cEmailTemp } from "../Email/callBack.js";

import { updateRT } from "./queries.js";
import { sendMail } from "../Email/sendMail.js";
//checks for joinus
export const joinus = async (dbRT) => {
  const pRef = query(ref(dbRT, "joinus/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const lead = snap.val();
    const key = snap.key;
    if (lead.sent !== true) {
      //removes flag
      updateRT(dbRT, key, lead, "joinus");

      // send email template to lead
      const clET = jEmailTemp(lead);
      const subject = `Onboarding Request`;
      sendMail(lead.email, subject, clET);
      /////////////////////////////////////
    }
  });
};

//checks for callback request
export const callback = async (dbRT) => {
  const pRef = query(ref(dbRT, "callBack/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const lead = snap.val();
    const key = snap.key;
    if (lead.sent !== true) {
      //removes flag
      updateRT(dbRT, key, lead, "callBack");

      // send email template to lead
      const clET = cEmailTemp(lead);
      const subject = `Call-Back Request`;
      sendMail(lead.email, subject, clET);
      /////////////////////////////////////
    }
  });
};
