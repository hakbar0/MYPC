import { emailTemplate } from "../EmailTemplates/saleAndPurchaseET.js";
export const sandpEmailTemp = (client, company) => {
  const { type, bLeaseholdOrFreehold, sLeaseholdOrFreehold, firstName } =
    client;
  let { postcode, bPrice, sPrice } = client;

  postcode = client.postcode.replace(/\s/g, "");
  let postcodeCut = 0;

  if (postcode.length == 5) postcodeCut = 2;
  else if (postcode.length == 6) postcodeCut = 3;
  else postcodeCut = 4;

  const leftPostcode = postcode.slice(0, postcodeCut);
  const rightPostcode = postcode.slice(-3);

  const salePrice = sPrice
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const purchasePrice = bPrice
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  const lowPrice = company[0].legalFees.totalPrice;

  return emailTemplate(
    lowPrice,
    leftPostcode,
    rightPostcode,
    type,
    salePrice,
    purchasePrice,
    bLeaseholdOrFreehold,
    sLeaseholdOrFreehold,
    firstName,
    company
  );
};
