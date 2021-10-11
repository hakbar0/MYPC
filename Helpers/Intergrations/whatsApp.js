import { whatsAppCred } from "../../Config/config.js";

import Twilio from "twilio";

export const whatsApp = async (cl, lFees, cNum, shortName) => {
  const { accountSid, authToken, number, msid } = whatsAppCred;
  const client = Twilio(accountSid, authToken);

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
  } = cl;

  const {
    totalLegalFee,
    disbursement,
    totalPrice,
    vat,
    leasehold,
    mortgage,
    ttFee,
    hmlr,
    bankruptcySearch,
    landRegistrySearch,
    lawyerChecker,
    searchPack,
    legalFee,
  } = lFees;

  const subtTotalLegalFee = totalLegalFee.toFixed(2);
  const disb = disbursement.toFixed(2);
  const tPrice = totalPrice.toFixed(2);
  const wVAT = vat.toFixed(2);

  const firstTimeBuyer = bFirstTimeBuyer == "true" ? "Yes" : "No";
  const lhold = bLeaseholdOrFreehold == "Leasehold" ? "Yes" : "No";
  const fhold = bLeaseholdOrFreehold != "Leasehold" ? "Yes" : "No";
  const mgage = bMortgage == "true" ? "Yes" : "No";
  const newbuild = bNewBuildProperty == "true" ? "Yes" : "No";
  const secondOrInvestment = bSecondOrInvestment == "true" ? "Yes" : "No";

  const template =
    `Dear ${shortName},\n\nA client just requested a quote in your area.\n\nTransaction Type: Purchase\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nE-mail: ${email}\nTel: ${tel}\n\nInstruction Date: ${instructDate}\n\nAddress: ${address}\nPostcode: ${postcode}\n` +
    `\nPurchase Price: £${bPrice
      .toString()
      .replace(
        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
        ","
      )}\nFirst Time Buyer: ${firstTimeBuyer} \nLeasehold: ${lhold} \nFreehold: ${fhold} \nMortgage: ${mgage} \nNew Build: ${newbuild} \nSecond or Investment: ${secondOrInvestment} \n\nFees\nLegal Fee: £${legalFee.toFixed(
      2
    )}\nLeasehold Fee: £${leasehold.toFixed(
      2
    )}\nMortgage Fee: £${mortgage.toFixed(2)}\nTT Fee: £${ttFee.toFixed(
      2
    )}\nVAT: £${wVAT}\nHM Land Registry Fee: £${hmlr.toFixed(
      2
    )}\nSubtotal: £${subtTotalLegalFee}` +
    `\n\nDisbursements\nBankruptcy Search: £${bankruptcySearch.toFixed(
      2
    )}\nLand Registry Search: £${landRegistrySearch.toFixed(
      2
    )}\nLawyer Checker: £${lawyerChecker.toFixed(
      2
    )}\nSearch Pack: £${searchPack.toFixed(
      2
    )}\nSubtotal: £${disb}\n\nTotal: £${tPrice}\n\n` +
    `Kind Regards,\nMy Property Conveyancer`;

  cNum.map(async (tel) => {
    await client.messages.create({
      body: template,
      from: number,
      messagingServiceSid: msid,
      to: "whatsapp:" + tel,
    });
  });
};
