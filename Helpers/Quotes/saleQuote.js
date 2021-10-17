import { round } from "./round.js";

export const saleQuote = (comp, cl) => {
  const { disbursements, fixedFees, price } = comp["sale"];

  let legalFees = {
    legalFee: 0.0,
    leasehold: 0.0,
    mortgage: 0.0,
    ttFee: 0.0,
    officialCopies: 0.0,
    disbursement: 0.0,
    vat: 0.0,
    totalLegalFee: 0.0,
    totalPrice: 0.0,
  };

  const sellingPrice = cl["sPrice"];
  const isLeasehold = cl["sLeaseholdOrFreehold"] === "Leasehold";
  const isMortgage = cl["sMortgage"] === "Yes";

  if (isLeasehold) {
    legalFees.leasehold = parseFloat(fixedFees["leaseholdFee"].toFixed(2));
  }

  if (isMortgage) {
    legalFees.mortgage = parseFloat(fixedFees["mortgageFee"].toFixed(2));
  }

  legalFees.ttFee = parseFloat(fixedFees["ttFee"].toFixed(2));
  legalFees.officialCopies = parseFloat(
    disbursements["officialCopies"].toFixed(2)
  );

  legalFees.legalFee = setLegalFees(price, sellingPrice);

  legalFees.disbursement = parseFloat(round(legalFees.officialCopies));
  legalFees.vat = parseFloat(
    round(
      (legalFees.legalFee +
        legalFees.leasehold +
        legalFees.mortgage +
        legalFees.ttFee) *
        0.2
    )
  );
  legalFees.totalLegalFee = parseFloat(
    round(
      (legalFees.legalFee +
        legalFees.leasehold +
        legalFees.mortgage +
        legalFees.ttFee) *
        1.2
    )
  );
  legalFees.totalPrice = parseFloat(
    round(
      parseFloat(legalFees.totalLegalFee) + parseFloat(legalFees.disbursement)
    )
  );

  return legalFees;
};

const setLegalFees = (price, sellingPrice) => {
  if (sellingPrice <= 100000) {
    return Number(price["100000"]);
  } else if (sellingPrice <= 200000) {
    return Number(price["200000"]);
  } else if (sellingPrice <= 300000) {
    return Number(price["300000"]);
  } else if (sellingPrice <= 500000) {
    return Number(price["500000"]);
  } else if (sellingPrice <= 700000) {
    return Number(price["700000"]);
  } else if (sellingPrice <= 1000000) {
    return Number(price["1000000"]);
  } else {
    return Number(price["1000000"]);
  }
};
