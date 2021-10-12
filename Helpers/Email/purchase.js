import { emailTemplate } from "../EmailTemplates/purchaseET.js";
export const pEmailTemplate = (client, lowprices) => {
  let postcode = client.postcode.replace(/\s/g, "");
  let postcodeCut = 0;

  if (postcode.length == 5) postcodeCut = 2;
  else if (postcode.length == 6) postcodeCut = 3;
  else postcodeCut = 4;

  let leftPostcode = postcode.slice(0, postcodeCut);
  let rightPostcode = postcode.slice(-3);

  let transactionType = client.type;
  let buyingPrice = client.bPrice
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  let propertyType = client.bLeaseholdOrFreehold;
  let name = client.firstName;
  let lowPrice = company[0].totalPrice;

  return emailTemplate(
    lowPrice,
    leftPostcode,
    rightPostcode,
    transactionType,
    buyingPrice,
    propertyType,
    name,
    company
  );
};
