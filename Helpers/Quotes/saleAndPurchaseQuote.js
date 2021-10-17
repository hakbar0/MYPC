import { buyQuote } from "./buyQuote.js";
import { saleQuote } from "./saleQuote.js";

export const saleAndPurchaseQuote = (comp, cl) => {
  const legalFees = {
    pLegalFees: buyQuote(comp, cl),
    sLegalFees: saleQuote(comp, cl),
  };
  legalFees.totalPrice =
    legalFees.pLegalFees.totalPrice + legalFees.sLegalFees.totalPrice;
  return legalFees;
};
