import { ref, onChildAdded, limitToLast, query } from "firebase/database";
import { whatsApp } from "../Intergrations/whatsApp.js";
import { assignSolicitors } from "../Firestore/assignSolicitors.js";
import { buyQuote } from "../Quotes/buyQuote.js";
import { purchaseTemplate } from "../WhatsAppTemplates/purchaseTemplate.js";

//checks for purchase
export const lastP = async (dbRT, dbFS) => {
  const pRef = query(ref(dbRT, "purchase/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const client = snap.val();
    if (client.sent !== true) {
      assignSolicitors(client, dbFS).then((sols) => {
        //sets legal fees
        sols.map((sol) => {
          sol.legalFees = buyQuote(sol, client);
        });
        sols.forEach((sol) => {
          // sends whatsapp
          if (sol.integrations.whatsapp) {
            purchaseTemplate(client, sol.legalFees, sol.contact.shortName).then(
              (template) => {
                whatsApp(template, sol.whatsApp.numbers);
              }
            );
          }
        });
      });
    }
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
