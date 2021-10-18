export const wRemortgageTemp = async (cl, lFees, shortName) => {
  const {
    rLeaseholdOrFreehold,
    rPrice,
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
    hmlr,
    ttFee,
    officialCopies,
    legalFee,
    bankruptcySearch,
    landRegistrySearch,
  } = lFees;

  const lhold = rLeaseholdOrFreehold == "Leasehold" ? "Yes" : "No";
  const fhold = rLeaseholdOrFreehold != "Leasehold" ? "Yes" : "No";

  const template =
    `Dear ${shortName},\n\nA client just requested a quote in your area.\n\nTransaction Type: Remortgage\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nE-mail: ${email}  \nTel: ${tel}\n\nInstruction Date: ${instructDate}\n\nAddress: ${address}\nPostcode: ${postcode}\n` +
    `\nRemortgage Price: £${rPrice
      .toString()
      .replace(
        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
        ","
      )}\nLeasehold: ${lhold} \nFreehold: ${fhold} \n\nFees\nLegal Fee: £${legalFee.toFixed(
      2
    )}\nTT Fee: £${ttFee.toFixed(2)}\nVAT: £${vat.toFixed(
      2
    )}\nHM Land Registry Fee: £${hmlr.toFixed(
      2
    )}\n\nSubtotal: £${totalLegalFee.toFixed(
      2
    )}\n\nDisbursements\nOfficial Copies: £${officialCopies.toFixed(
      2
    )}\nBankruptcy Search: £${bankruptcySearch.toFixed(
      2
    )}\nLand Registry Search: £${landRegistrySearch.toFixed(
      2
    )}\nSubtotal: £${disbursement.toFixed(2)}\n\nTotal: £${totalPrice.toFixed(
      2
    )}` +
    `\n\nKind Regards,\nMy Property Conveyancer`;

  return template;
};
