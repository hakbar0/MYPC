export const wSaleTemp = async (cl, lFees, shortName) => {
  const {
    sMortgage,
    sLeaseholdOrFreehold,
    sPrice,
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
    officialCopies,
    legalFee,
  } = lFees;

  const lhold = sLeaseholdOrFreehold == "Leasehold" ? "Yes" : "No";
  const fhold = sLeaseholdOrFreehold != "Leasehold" ? "Yes" : "No";
  const mgage = sMortgage == "true" ? "Yes" : "No";

  const template =
    `Dear ${shortName},\n\nA client just requested a quote in your area.\n\nTransaction Type: Sale\n\nFirst Name: ${firstName}\nLast Name: ${lastName} \nE-mail: ${email}  \nTel: ${tel}\n\nInstruction Date: ${instructDate}\n\nAddress: ${address}\nPostcode: ${postcode}\n` +
    `\nSale Price: £${sPrice
      .toString()
      .replace(
        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
        ","
      )}\nLeasehold: ${lhold} \nFreehold: ${fhold} \nMortgage: ${mgage} \n\nFees\nLegal Fee: £${legalFee.toFixed(
      2
    )}\nLeasehold Fee: £${leasehold.toFixed(
      2
    )}\nMortgage Fee: £${mortgage.toFixed(2)}\nTT Fee: £${ttFee.toFixed(
      2
    )}\nVAT: £${vat.toFixed(2)}\nSubtotal: £${totalLegalFee.toFixed(
      2
    )}\n\nDisbursements\nOfficial Copies: £${officialCopies.toFixed(
      2
    )}\nSubtotal: £${disbursement.toFixed(2)}\n\nTotal: £${totalPrice.toFixed(
      2
    )}` +
    `\n\nKind Regards,\nMy Property Conveyancer`;

  return template;
};
