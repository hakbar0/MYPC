import { emailTemplate } from "../EmailTemplates/purchaseET.js";
export const pEmailTemp = (client, company) => {
  const { type, bLeaseholdOrFreehold, firstName } = client;
  let { postcode, bPrice } = client;

  postcode = postcode.replace(/\s/g, "");
  let postcodeCut = 0;

  if (postcode.length == 5) postcodeCut = 2;
  else if (postcode.length == 6) postcodeCut = 3;
  else postcodeCut = 4;

  const leftPostcode = postcode.slice(0, postcodeCut);
  const rightPostcode = postcode.slice(-3);

  const buyingPrice = bPrice
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const lowPrice = company[0].legalFees.totalPrice;

  return emailTemplate(
    lowPrice,
    leftPostcode,
    rightPostcode,
    type,
    buyingPrice,
    bLeaseholdOrFreehold,
    firstName,
    company
  );
};
