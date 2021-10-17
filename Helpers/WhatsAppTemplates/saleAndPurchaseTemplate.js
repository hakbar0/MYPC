import { round } from "../Quotes/round.js";
export const wPandSTemp = async (cl, lFees, shortName) => {
  const { pLegalFees, sLegalFees } = lFees;
  const {
    bFirstTimeBuyer,
    bLeaseholdOrFreehold,
    bMortgage,
    bNewBuildProperty,
    bSecondOrInvestment,
    bPrice,
    firstName,
    lastName,
    email,
    tel,
    instructDate,
    address,
    postcode,
    sMortgage,
    sLeaseholdOrFreehold,
    sPrice,
  } = cl;

  //purchase
  const purchLegalFee = pLegalFees.totalLegalFee.toFixed(2);
  const purchaseVat = pLegalFees.vat.toFixed(2);
  const purchaseDisbursement = pLegalFees.disbursement.toFixed(2);
  const purchaseTotalPrice = pLegalFees.totalPrice.toFixed(2);

  //sale
  const sellLegalFee = sLegalFees.totalLegalFee.toFixed(2);
  const saleVat = sLegalFees.vat.toFixed(2);
  const saleDisbursement = sLegalFees.disbursement.toFixed(2);
  const saleTotalPrice = sLegalFees.totalPrice.toFixed(2);

  const totalPrice = round(
    parseFloat(saleTotalPrice) + parseFloat(purchaseTotalPrice)
  );

  const firstTimeBuyer = bFirstTimeBuyer == "true" ? "Yes" : "No";
  const leasehold = bLeaseholdOrFreehold == "Leasehold" ? "Yes" : "No";
  const freehold = bLeaseholdOrFreehold != "Leasehold" ? "Yes" : "No";
  const mortgage = bMortgage == "true" ? "Yes" : "No";
  const newbuild = bNewBuildProperty == "true" ? "Yes" : "No";
  const secondOrInvestment = bSecondOrInvestment == "true" ? "Yes" : "No";
  const sLeasehold = sLeaseholdOrFreehold == "Leasehold" ? "Yes" : "No";
  const sFreehold = sLeaseholdOrFreehold != "Leasehold" ? "Yes" : "No";
  const sellMortgage = sMortgage == "true" ? "Yes" : "No";

  const template =
    `Dear ${shortName},\n` +
    `\n` +
    `A client just requested a quote in your area.\n` +
    `\n` +
    `Transaction Type: Sale & Purchase\n` +
    `\n` +
    `First Name: ${firstName}\n` +
    `Last Name: ${lastName}\n` +
    `E-mail: ${email} \n` +
    `Tel: ${tel}\n` +
    `\n` +
    `Instruction Date: ${instructDate}\n` +
    `\n` +
    `Address: ${address}\n` +
    `Postcode: ${postcode}\n` +
    `\n` +
    `Purchase Price: £${bPrice
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}\n` +
    `First Time Buyer: ${firstTimeBuyer} \n` +
    `Leasehold: ${leasehold} \n` +
    `Freehold: ${freehold} \n` +
    `Mortgage: ${mortgage} \n` +
    `New Build: ${newbuild} \n` +
    `Second or Investment: ${secondOrInvestment} \n` +
    `\n` +
    `Purchase Fees\n` +
    `Legal Fee: £${pLegalFees.legalFee.toFixed(2)}\n` +
    `Leasehold Fee: £${pLegalFees.leasehold.toFixed(2)}\n` +
    `Mortgage Fee: £${pLegalFees.mortgage.toFixed(2)}\n` +
    `TT Fee: £${pLegalFees.ttFee.toFixed(2)}\n` +
    `VAT: £${purchaseVat}\n` +
    `HM Land Registry Fee: £${pLegalFees.hmlr.toFixed(2)}\n` +
    `Subtotal: £${purchLegalFee}\n` +
    `\n` +
    `Disbursements\n` +
    `Bankruptcy Search: £${pLegalFees.bankruptcySearch.toFixed(2)}\n` +
    `Land Registry Search: £${pLegalFees.landRegistrySearch.toFixed(2)}\n` +
    `Lawyer Checker: £${pLegalFees.lawyerChecker.toFixed(2)}\n` +
    `Search Pack: £${pLegalFees.searchPack.toFixed(2)}\n` +
    `Subtotal: £${purchaseDisbursement}\n` +
    `\n` +
    `Purchase Total: £${purchaseTotalPrice}\n` +
    `\n` +
    `Sale Price: £${sPrice
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}\n` +
    `Leasehold: ${sLeasehold} \n` +
    `Freehold: ${sFreehold} \n` +
    `Mortgage: ${sellMortgage} \n` +
    `\n` +
    `Sale Fees\n` +
    `Legal Fee: £${sLegalFees.legalFee.toFixed(2)}\n` +
    `Leasehold Fee: £${sLegalFees.leasehold.toFixed(2)}\n` +
    `Mortgage Fee: £${sLegalFees.mortgage.toFixed(2)}\n` +
    `TT Fee: £${sLegalFees.ttFee.toFixed(2)}\n` +
    `VAT: £${saleVat}\n` +
    `Subtotal: £${sellLegalFee}\n` +
    `\n` +
    `Disbursements\n` +
    `Official Copies: £${sLegalFees.officialCopies.toFixed(2)}\n` +
    `Subtotal: £${saleDisbursement}\n` +
    `\n` +
    `Sale Total: £${saleTotalPrice}\n` +
    `\n` +
    `Combined Total: £${totalPrice}\n` +
    `\n` +
    `Kind Regards,\n` +
    `My Property Conveyancer\n`;

  return template;
};
