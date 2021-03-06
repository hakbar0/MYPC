import { ref, onChildAdded, limitToLast, query } from "firebase/database";
import { whatsApp } from "../Intergrations/whatsApp.js";
import { assignSolicitors } from "../Firestore/assignSolicitors.js";
import { buyQuote } from "../Quotes/buyQuote.js";
import { saleQuote } from "../Quotes/saleQuote.js";
import { saleAndPurchaseQuote } from "../Quotes/saleAndPurchaseQuote.js";
import { remortgageQuote } from "../Quotes/remortgageQuote.js";
import { wPurchTemp } from "../WhatsAppTemplates/purchaseTemplate.js";
import { wSaleTemp } from "../WhatsAppTemplates/saleTemplate.js";
import { wPandSTemp } from "../WhatsAppTemplates/saleAndPurchaseTemplate.js";
import { wRemortgageTemp } from "../WhatsAppTemplates/remortgageTemplate.js";
import { pEmailTemp } from "../Email/purchase.js";
import { sEmailTemp } from "../Email/sale.js";
import { sandpEmailTemp } from "../Email/saleAndPurchase.js";
import { rEmailTemp } from "../Email/remortgage.js";
import { companyET } from "../EmailTemplates/companyET.js";
import { sendMail } from "../Email/sendMail.js";
import { updateRT } from "./queries.js";

//checks for purchase
export const lastP = async (dbRT, dbFS) => {
  const pRef = query(ref(dbRT, "purchase/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const client = snap.val();
    const key = snap.key;
    if (client.sent !== true) {
      //removes flag
      updateRT(dbRT, key, client, "purchase");
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
  });
};

//checks for sale
export const lastS = async (dbRT, dbFS) => {
  const pRef = query(ref(dbRT, "sale/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const client = snap.val();
    const key = snap.key;
    if (client.sent !== true) {
      //removes flag
      updateRT(dbRT, key, client, "sale");
      assignSolicitors(client, dbFS).then((sols) => {
        //sets legal fees
        // sort by legal fees
        sols
          .map((sol) => {
            sol.legalFees = saleQuote(sol, client);
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
          //sends whatsapp
          if (sol.integrations.whatsapp) {
            wSaleTemp(client, legalFees, shortName).then((template) => {
              whatsApp(template, sol.whatsApp.numbers);
            });
            /////////////////////////////////////
          }
        });
        // send email template to client
        const clET = sEmailTemp(client, sols);
        const subject = `Sale Quote - ${client.firstName}, ${client.postcode}`;
        sendMail(client.email, subject, clET);
        /////////////////////////////////////
      });
    }
  });
};

//checks for sale and purchase
export const lastSP = async (dbRT, dbFS) => {
  const pRef = query(ref(dbRT, "saleAndPurchase/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const client = snap.val();
    const key = snap.key;
    if (client.sent !== true) {
      //removes flag
      updateRT(dbRT, key, client, "saleAndPurchase");
      assignSolicitors(client, dbFS).then((sols) => {
        //sets legal fees
        // sort by legal fees
        sols
          .map((sol) => {
            sol.legalFees = saleAndPurchaseQuote(sol, client);
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
          //sends whatsapp
          if (sol.integrations.whatsapp) {
            wPandSTemp(client, legalFees, shortName).then((template) => {
              whatsApp(template, sol.whatsApp.numbers);
            });
            /////////////////////////////////////
          }
        });
        // send email template to client
        const clET = sandpEmailTemp(client, sols);
        const subject = `Sale & Purchase Quote - ${client.firstName}, ${client.postcode}`;
        sendMail(client.email, subject, clET);
        /////////////////////////////////////
      });
    }
  });
};

// checks for remortgage
export const lastR = async (dbRT, dbFS) => {
  const pRef = query(ref(dbRT, "remortgage/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const client = snap.val();
    const key = snap.key;
    if (client.sent !== true) {
      //removes flag
      updateRT(dbRT, key, client, "remortgage");
      assignSolicitors(client, dbFS).then((sols) => {
        //sets legal fees
        // sort by legal fees
        sols
          .map((sol) => {
            sol.legalFees = remortgageQuote(sol, client);
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
          //sends whatsapp
          if (sol.integrations.whatsapp) {
            wRemortgageTemp(client, legalFees, shortName).then((template) => {
              whatsApp(template, sol.whatsApp.numbers);
            });
            /////////////////////////////////////
          }
        });
        // send email template to client
        const clET = rEmailTemp(client, sols);
        const subject = `Remortgage Quote - ${client.firstName}, ${client.postcode}`;
        sendMail(client.email, subject, clET);
        /////////////////////////////////////
      });
    }
  });
};
