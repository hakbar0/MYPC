import { emailTemplate } from "../EmailTemplates/SaleET.js";
export const sEmailTemp = (client, company) => {
  const { type, sLeaseholdOrFreehold, firstName } = client;
  let { postcode, sPrice } = client;

  postcode = postcode.replace(/\s/g, "");
  let postcodeCut = 0;

  if (postcode.length == 5) postcodeCut = 2;
  else if (postcode.length == 6) postcodeCut = 3;
  else postcodeCut = 4;

  const leftPostcode = postcode.slice(0, postcodeCut);
  const rightPostcode = postcode.slice(-3);

  const sellingPrice = sPrice
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const lowPrice = company[0].legalFees.totalPrice;

  return emailTemplate(
    lowPrice,
    leftPostcode,
    rightPostcode,
    type,
    sellingPrice,
    sLeaseholdOrFreehold,
    firstName,
    company
  );
};
