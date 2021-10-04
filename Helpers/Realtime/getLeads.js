import { ref, onChildAdded, limitToLast, query } from "firebase/database";
import { assignSolicitors } from "../Firestore/assignSolicitors.js";

//checks for purchase
export const lastP = async (dbRT, dbFS) => {
  const pRef = query(ref(dbRT, "purchase/"), limitToLast(1));
  onChildAdded(pRef, (snap) => {
    const data = snap.val();
    if (data.sent !== true) {
      return assignSolicitors(data, dbFS);
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
