import { buyQuote } from "./buyQuote.js";
import { saleQuote } from "./saleQuote.js";

export const saleAndPurchaseQuote = (comp, cl) => {
  const legalFees = {
    pLegalFees: buyQuote(comp, cl),
    sLegalFees: saleQuote(comp, cl),
  };
  legalFees.totalPrice =
    legalFees.pLegalFees.totalPrice + legalFees.sLegalFees.totalPrice;
  legalFees.disbursement =
    legalFees.pLegalFees.disbursement + legalFees.sLegalFees.disbursement;
  legalFees.totalLegalFee =
    legalFees.pLegalFees.totalLegalFee + legalFees.sLegalFees.totalLegalFee;

  return legalFees;
};
