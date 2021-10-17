import { ref, onChildAdded, limitToLast, query } from "firebase/database";
import { whatsApp } from "../Intergrations/whatsApp.js";
import { assignSolicitors } from "../Firestore/assignSolicitors.js";
import { buyQuote } from "../Quotes/buyQuote.js";
import { wPurchTemp } from "../WhatsAppTemplates/purchaseTemplate.js";
import { pEmailTemp } from "../Email/purchase.js";
import { companyET } from "../EmailTemplates/companyET.js";
import { sendMail } from "../Email/sendMail.js";
import { updateRTCompany } from "./queries.js";

//checks for purchase
export const lastP = async (dbRT, dbFS) => {
  const pRef = query(ref(dbRT, "purchase/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const client = snap.val();
    const key = snap.key;
    if (client.sent !== true) {
      assignSolicitors(client, dbFS).then((sols) => {
        //sets legal fees
        // sort by legal fees
        sols
          .map((sol) => {
            sol.legalFees = buyQuote(sol, client);
          })
          .sort((a, b) => {
            return a.legalFees.totalPrice - b.legalFees.totalPrice;
          });
        ////////////////////////////////////
        ////////////////////////////////////
        sols.forEach((sol) => {
          const {
            legalFees,
            contact: { shortName, email },
          } = sol;
          // send email to company
          const et = companyET(client, shortName, legalFees);
          const subject = `New Lead - ${client.firstName}, ${client.type}`;
          sendMail(email, subject, et);
          ////////////////////////////////////
          // sends whatsapp
          if (sol.integrations.whatsapp) {
            wPurchTemp(client, legalFees, shortName).then((template) => {
              whatsApp(template, sol.whatsApp.numbers);
            });
            /////////////////////////////////////
          }
        });
        // send email template to client
        const clET = pEmailTemp(client, sols);
        const subject = `Purchase Quote - ${client.firstName}, ${client.postcode}`;
        sendMail(client.email, subject, clET);
        /////////////////////////////////////
      });
    }
    //removes flag
    updateRTCompany(dbRT, key, client, "purchase");
  });
};

//checks for sale
export const lastS = async (dbRT) => {
  const pRef = query(ref(dbRT, "sale/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const data = snap.val();
    if (data.sent !== "true") {
      console.log(data);
    }
  });
};

//checks for sale and purchase
export const lastSP = async (dbRT) => {
  const pRef = query(ref(dbRT, "saleAndPurchase/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const data = snap.val();
    if (data.sent !== "true") {
      console.log(data);
    }
  });
};

// checks for remortgage
export const lastR = async (dbRT) => {
  const pRef = query(ref(dbRT, "remortgage/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const data = snap.val();
    if (data.sent !== "true") {
      console.log(data);
    }
  });
};
