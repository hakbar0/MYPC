import { round } from "./round.js";

export const remortgageQuote = (comp, cl) => {
  const { disbursements, fixedFees, price, hmLandRegistry } =
    comp["remortgage"];

  let legalFees = {
    legalFee: 0.0,
    officialCopies: 0.0,
    bankruptcySearch: 0.0,
    landRegistrySearch: 0.0,
    ttFee: 0.0,
    hmlr: 0.0,
    disbursement: 0.0,
    vat: 0.0,
    totalLegalFee: 0.0,
    totalPrice: 0.0,
  };

  const remortgagePrice = cl["rPrice"];
  legalFees.legalFee = setLegalFees(price, remortgagePrice);
  legalFees.hmlr = setHMLRFees(hmLandRegistry, remortgagePrice);

  legalFees.bankruptcySearch = disbursements.bankruptcySearch;
  legalFees.landRegistrySearch = disbursements.landRegistrySearch;
  legalFees.officialCopies = disbursements.officialCopies;

  legalFees.ttFee = fixedFees.ttFee;

  legalFees.disbursement = parseFloat(
    round(
      parseFloat(legalFees.bankruptcySearch) +
        parseFloat(legalFees.landRegistrySearch) +
        parseFloat(legalFees.officialCopies)
    )
  );

  legalFees.vat = parseFloat(
    round((parseFloat(legalFees.legalFee) + parseFloat(legalFees.ttFee)) * 0.2)
  );

  legalFees.totalLegalFee = parseFloat(
    round(
      (parseFloat(legalFees.legalFee) + parseFloat(legalFees.ttFee)) * 1.2 +
        legalFees.hmlr
    )
  );

  legalFees.totalPrice = parseFloat(
    round(
      parseFloat(legalFees.totalLegalFee) + parseFloat(legalFees.disbursement)
    )
  );

  return legalFees;
};

const setLegalFees = (company, remortgagePrice) => {
  if (remortgagePrice <= 100000) {
    return Number(company["100000"]);
  } else if (remortgagePrice <= 200000) {
    return Number(company["200000"]);
  } else if (remortgagePrice <= 300000) {
    return Number(company["300000"]);
  } else if (remortgagePrice <= 500000) {
    return Number(company["500000"]);
  } else if (remortgagePrice <= 700000) {
    return Number(company["700000"]);
  } else if (remortgagePrice <= 1000000) {
    return Number(company["1000000"]);
  } else {
    return Number(company["1000000"]);
  }
};

const setHMLRFees = (HMLR, remortgagePrice) => {
  if (remortgagePrice <= 80000) {
    return Number(HMLR["80000"]);
  } else if (remortgagePrice <= 100000) {
    return Number(HMLR["100000"]);
  } else if (remortgagePrice <= 200000) {
    return Number(HMLR["200000"]);
  } else if (remortgagePrice <= 500000) {
    return Number(HMLR["500000"]);
  } else if (remortgagePrice <= 1000000) {
    return Number(HMLR["1000000"]);
  } else {
    return Number(HMLR["1000000"]);
  }
};
