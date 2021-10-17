import { round } from "./round.js";

export const buyQuote = (comp, cl) => {
  const { disbursements, fixedFees, hmLandRegistry, price } = comp["purchase"];

  let legalFees = {
    legalFee: 0.0,
    leasehold: 0.0,
    mortgage: 0.0,
    bankruptcySearch: 0.0,
    landRegistrySearch: 0.0,
    lawyerChecker: 0.0,
    searchPack: 0.0,
    ttFee: 0.0,
    hmlr: 0.0,
    disbursement: 0.0,
    vat: 0.0,
    totalLegalFee: 0.0,
    totalPrice: 0.0,
  };

  const buyingPrice = cl["bPrice"];
  const isLeasehold = cl["bLeaseholdOrFreehold"] === "Leasehold";
  const isMortgage = cl["bMortgage"] === "true";

  if (isLeasehold) {
    legalFees.leasehold = parseFloat(fixedFees["leaseholdFee"].toFixed(2));
  }

  if (isMortgage) {
    legalFees.mortgage = parseFloat(fixedFees["mortgageFee"].toFixed(2));
  }

  legalFees.bankruptcySearch = parseFloat(
    disbursements["bankruptcySearch"].toFixed(2)
  );
  legalFees.landRegistrySearch = parseFloat(
    disbursements["landRegistrySearch"].toFixed(2)
  );

  legalFees.lawyerChecker = parseFloat(
    disbursements["lawyerChecker"].toFixed(2)
  );

  legalFees.searchPack = parseFloat(disbursements["searchPack"].toFixed(2));
  legalFees.ttFee = parseFloat(fixedFees["ttFee"].toFixed(2));

  legalFees.hmlr = parseFloat(
    setHMLRFees(hmLandRegistry, buyingPrice).toFixed(2)
  );

  legalFees.legalFee = parseFloat(setLegalFees(price, buyingPrice).toFixed(2));

  legalFees.disbursement = round(
    parseFloat(legalFees.bankruptcySearch) +
      parseFloat(legalFees.landRegistrySearch) +
      parseFloat(legalFees.lawyerChecker) +
      parseFloat(legalFees.searchPack)
  );
  legalFees.vat = round(
    (parseFloat(legalFees.legalFee) +
      parseFloat(legalFees.leasehold) +
      parseFloat(legalFees.mortgage) +
      parseFloat(legalFees.ttFee)) *
      0.2
  );
  legalFees.totalLegalFee = round(
    (parseFloat(legalFees.legalFee) +
      parseFloat(legalFees.leasehold) +
      parseFloat(legalFees.mortgage) +
      parseFloat(legalFees.ttFee)) *
      1.2 +
      parseFloat(legalFees.hmlr)
  );
  legalFees.totalPrice = round(
    parseFloat(legalFees.totalLegalFee) + parseFloat(legalFees.disbursement)
  );

  return legalFees;
};

const setLegalFees = (price, buyingPrice) => {
  if (buyingPrice <= 100000) {
    return Number(price["100000"]);
  } else if (buyingPrice <= 200000) {
    return Number(price["200000"]);
  } else if (buyingPrice <= 300000) {
    return Number(price["300000"]);
  } else if (buyingPrice <= 500000) {
    return Number(price["500000"]);
  } else if (buyingPrice <= 700000) {
    return Number(price["700000"]);
  } else if (buyingPrice <= 1000000) {
    return Number(price["1000000"]);
  } else {
    return Number(price["1000000"]);
  }
};
const setHMLRFees = (HMLR, buyingPrice) => {
  if (buyingPrice <= 80000) {
    return Number(HMLR["80000"]);
  } else if (buyingPrice <= 100000) {
    return Number(HMLR["100000"]);
  } else if (buyingPrice <= 200000) {
    return Number(HMLR["200000"]);
  } else if (buyingPrice <= 500000) {
    return Number(HMLR["500000"]);
  } else if (buyingPrice <= 1000000) {
    return Number(HMLR["1000000"]);
  } else {
    return Number(HMLR["other"]);
  }
};
