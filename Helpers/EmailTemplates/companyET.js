import { round } from "../Quotes/round.js";

export const companyET = (clientObj, company, lFees) => {
  let html = `<!DOCTYPE html
   PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   <html xmlns="http://www.w3.org/1999/xhtml">
   
   <head>
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
   <title>My Property Conveyancer Quote</title>
   </head>
   
   <body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen-Sans,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;color:#252525;">
   
   Dear ${company},<br><br>
   
   A client just requested a quote in your area.<br><br>
   
   <strong>Transaction Type:</strong> ${clientObj.type} <br><br>
   
   <strong>First Name:</strong> ${clientObj.firstName} <br>
   <strong>Last Name:</strong> ${clientObj.lastName} <br>
   <strong>E-mail:</strong> ${clientObj.email} <br>
   <strong>Tel:</strong> ${clientObj.tel} <br><br>
   
   <strong>Instruction Date:</strong> ${clientObj.instructDate} <br><br>
   
   <strong>Address:</strong> ${clientObj.address} <br>
   <strong>Postcode:</strong> ${clientObj.postcode} <br><br>`;

  if (clientObj.type === "Purchase") {
    if (clientObj.bPrice)
      html += `<strong>Purchase Price:</strong> £${clientObj.bPrice
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}<br>`;

    if (clientObj.bFirstTimeBuyer === "true")
      html += `<strong>First Time Buyer:</strong> Yes<br>`;
    else html += `<strong>First Time Buyer:</strong> No<br>`;

    if (clientObj.bLeaseholdOrFreehold === "Leasehold")
      html += `<strong>Leasehold:</strong> Yes<br>`;
    else html += `<strong>Leasehold:</strong> No<br>`;

    if (clientObj.bLeaseholdOrFreehold === "Freehold")
      html += `<strong>Freehold:</strong> Yes<br>`;
    else html += `<strong>Freehold:</strong> No<br>`;

    if (clientObj.bMortgage === "true")
      html += `  <strong>Mortgage:</strong> Yes<br>`;
    else html += `<strong>Mortgage:</strong> No<br>`;

    if (clientObj.bNewBuildProperty === "true")
      html += `<strong>New Build:</strong> Yes<br>`;
    else html += `<strong>New Build:</strong> No<br>`;

    if (clientObj.bSecondOrInvestment === "true")
      html += `<strong>Second or Investment:</strong> Yes<br>`;
    else html += `<strong>Second or Investment:</strong> No<br>`;

    html += `<br><strong>Fees</strong><br>`;
    html += `<strong>Legal Fee:</strong> £${lFees.legalFee.toFixed(2)}<br>`;
    html += `<strong>Leasehold Fee:</strong> £${lFees.leasehold.toFixed(
      2
    )}<br>`;
    html += `<strong>Mortgage Fee:</strong> £${lFees.mortgage.toFixed(2)}<br>`;
    html += `<strong>TT Fee:</strong> £${lFees.ttFee.toFixed(2)}<br>`;
    html += `<strong>VAT:</strong> £${lFees.vat.toFixed(2)}<br>`;
    html += `<strong>HM Land Registry Fee:</strong> £${lFees.hmlr.toFixed(
      2
    )}<br>`;
    html += `<strong>Subtotal:</strong> £${lFees.totalLegalFee.toFixed(2)}<br>`;
    html += `<br><strong>Disbursements</strong><br>`;
    html += `<strong>Bankruptcy Search:</strong> £${lFees.bankruptcySearch.toFixed(
      2
    )}<br>`;
    html += `<strong>Land Registry Search:</strong> £${lFees.landRegistrySearch.toFixed(
      2
    )}<br>`;
    html += `<strong>Lawyer Checker:</strong> £${lFees.lawyerChecker.toFixed(
      2
    )}<br>`;
    html += `<strong>Search Pack:</strong> £${lFees.searchPack.toFixed(2)}<br>`;
    html += `<strong>Subtotal:</strong> £${lFees.disbursement.toFixed(2)}<br>`;
    html += `<br><strong>Total:</strong> £${lFees.totalPrice.toFixed(2)}<br>`;
  }

  if (clientObj.type === "Sale Only") {
    if (clientObj.sPrice)
      html += `<strong>Sale Price:</strong> £${clientObj.sPrice
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}<br>`;

    if (clientObj.sLeaseholdOrFreehold === "Leasehold")
      html += `<strong>Leasehold:</strong> Yes<br>`;
    else html += `<strong>Leasehold:</strong> No<br>`;

    if (clientObj.sLeaseholdOrFreehold === "Freehold")
      html += `<strong>Freehold:</strong> Yes<br>`;
    else html += `<strong>Freehold:</strong> No<br>`;

    if (clientObj.sMortgage === "Yes")
      html += `<strong>Mortgage:</strong> Yes<br>`;
    else html += `<strong>Mortgage:</strong> No<br>`;

    html += `<br><strong>Fees</strong><br>`;
    html += `<strong>Legal Fee:</strong> £${lFees.legalFee.toFixed(2)}<br>`;
    html += `<strong>Leasehold Fee:</strong> £${lFees.leasehold.toFixed(
      2
    )}<br>`;
    html += `<strong>Mortgage Fee:</strong> £${lFees.mortgage.toFixed(2)}<br>`;
    html += `<strong>TT Fee:</strong> £${lFees.ttFee.toFixed(2)}<br>`;
    html += `<strong>VAT:</strong> £${lFees.vat.toFixed(2)}<br>`;
    html += `<strong>Subtotal:</strong> £${lFees.totalLegalFee.toFixed(2)}<br>`;
    html += `<br><strong>Disbursements</strong><br>`;
    html += `<strong>Official Copies:</strong> £${lFees.officialCopies.toFixed(
      2
    )}<br>`;
    html += `<strong>Subtotal:</strong> £${lFees.disbursement.toFixed(2)}<br>`;
    html += `<br><strong>Total:</strong> £${lFees.totalPrice.toFixed(2)}<br>`;
  }

  if (clientObj.type === "Sale and Purchase") {
    var saleLegalFee = lFees.sellLegalFees;
    var purchaseLegalFee = lFees.purchaseLegalFees;

    if (clientObj.bPrice)
      html += `<strong>Purchase Price:</strong> £${clientObj.bPrice
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}<br>`;

    if (clientObj.bFirstTimeBuyer === "true")
      html += `<strong>First Time Buyer:</strong> Yes<br>`;
    else html += `<strong>First Time Buyer:</strong> No<br>`;

    if (clientObj.bLeaseholdOrFreehold === "Leasehold")
      html += `<strong>Leasehold:</strong> Yes<br>`;
    else html += `<strong>Leasehold:</strong> No<br>`;

    if (clientObj.bLeaseholdOrFreehold === "Freehold")
      html += `<strong>Freehold:</strong> Yes<br>`;
    else html += `<strong>Freehold:</strong> No<br>`;

    if (clientObj.bMortgage === "true")
      html += `<strong>Mortgage:</strong> Yes<br>`;
    else html += `<strong>Mortgage:</strong> No<br>`;

    if (clientObj.bNewBuildProperty === "true")
      html += `<strong>New Build:</strong> Yes<br>`;
    else html += `<strong>New Build:</strong> No<br>`;

    if (clientObj.bSecondOrInvestment === "true")
      html += `<strong>Second or Investment:</strong> Yes<br>`;
    else html += `<strong>Second or Investment:</strong> No<br>`;

    html += `<br><strong>Purchase Fees</strong><br>`;
    html += `<strong>Legal Fee:</strong> £${purchaseLegalFee.legalFee.toFixed(
      2
    )}<br>`;
    html += `<strong>Leasehold Fee:</strong> £${purchaseLegalFee.leasehold.toFixed(
      2
    )}<br>`;
    html += `<strong>Mortgage Fee:</strong> £${purchaseLegalFee.mortgage.toFixed(
      2
    )}<br>`;
    html += `<strong>TT Fee:</strong> £${purchaseLegalFee.ttFee.toFixed(
      2
    )}<br>`;
    html += `<strong>VAT:</strong> £${purchaseLegalFee.vat.toFixed(2)}<br>`;
    html += `<strong>HM Land Registry Fee:</strong> £${purchaseLegalFee.hmlr.toFixed(
      2
    )}<br>`;
    html += `<strong>Subtotal:</strong> £${purchaseLegalFee.totalLegalFee.toFixed(
      2
    )}<br>`;
    html += `<br><strong>Disbursements</strong><br>`;
    html += `<strong>Bankruptcy Search:</strong> £${purchaseLegalFee.bankruptcySearch.toFixed(
      2
    )}<br>`;
    html += `<strong>Land Registry Search:</strong> £${purchaseLegalFee.landRegistrySearch.toFixed(
      2
    )}<br>`;
    html += `<strong>Lawyer Checker:</strong> £${purchaseLegalFee.lawyerChecker.toFixed(
      2
    )}<br>`;
    html += `<strong>Search Pack:</strong> £${purchaseLegalFee.searchPack.toFixed(
      2
    )}<br>`;
    html += `<strong>Subtotal:</strong> £${purchaseLegalFee.disbursement.toFixed(
      2
    )}<br>`;
    html += `<br><strong>Purchase Total:</strong> £${purchaseLegalFee.totalPrice.toFixed(
      2
    )}<br>`;

    if (clientObj.sPrice)
      html += `<br><strong>Sale Price:</strong> £${clientObj.sPrice
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}<br>`;

    if (clientObj.sLeaseholdOrFreehold === "Leasehold")
      html += `<strong>Leasehold:</strong> Yes<br>`;
    else html += `<strong>Leasehold:</strong> No<br>`;

    if (clientObj.sLeaseholdOrFreehold === "Freehold")
      html += `<strong>Freehold:</strong> Yes<br>`;
    else html += `<strong>Freehold:</strong> No<br>`;

    if (clientObj.sMortgage === "Yes")
      html += `<strong>Mortgage:</strong> Yes<br>`;
    else html += `<strong>Mortgage:</strong> No<br>`;

    html += `<br><strong>Sale Fees</strong><br>`;
    html += `<strong>Legal Fee:</strong> £${saleLegalFee.legalFee.toFixed(
      2
    )}<br>`;
    html += `<strong>Leasehold Fee:</strong> £${saleLegalFee.leasehold.toFixed(
      2
    )}<br>`;
    html += `<strong>Mortgage Fee:</strong> £${saleLegalFee.mortgage.toFixed(
      2
    )}<br>`;
    html += `<strong>TT Fee:</strong> £${saleLegalFee.ttFee.toFixed(2)}<br>`;
    html += `<strong>VAT:</strong> £${saleLegalFee.vat.toFixed(2)}<br>`;
    html += `<strong>Subtotal:</strong> £${saleLegalFee.totalLegalFee.toFixed(
      2
    )}<br>`;
    html += `<br><strong>Disbursements</strong><br>`;
    html += `<strong>Official Copies:</strong> £${saleLegalFee.officialCopies.toFixed(
      2
    )}<br>`;
    html += `<strong>Subtotal:</strong> £${saleLegalFee.disbursement.toFixed(
      2
    )}<br>`;
    html += `<br><strong>Sale Total:</strong> £${saleLegalFee.totalPrice.toFixed(
      2
    )}<br>`;
    html += `<br><strong>Combined Total:</strong> £${round(
      parseFloat(saleLegalFee.totalPrice) +
        parseFloat(purchaseLegalFee.totalPrice)
    )}<br>`;
  }

  if (clientObj.type === "Remortgage") {
    if (clientObj.rPrice)
      html += `<strong>Remortgage Price:</strong> £${clientObj.rPrice
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}<br>`;
    if (clientObj.rLeaseholdOrFreehold === "Leasehold")
      html += `<strong>Leasehold:</strong> Yes<br>`;
    if (clientObj.rLeaseholdOrFreehold === "Freehold")
      html += `<strong>Freehold:</strong> Yes<br>`;
    html += `<br><strong>Fees</strong><br>`;
    html += `<strong>Legal Fee:</strong> £${lFees.legalFee.toFixed(2)}<br>`;
    html += `<strong>TT Fee:</strong> £${lFees.ttFee.toFixed(2)}<br>`;
    html += `<strong>VAT:</strong> £${lFees.vat.toFixed(2)}<br>`;
    html += `<strong>HM Land Registry Fee:</strong> £${lFees.hmlr.toFixed(
      2
    )}<br>`;
    html += `<strong>Subtotal:</strong> £${lFees.totalLegalFee.toFixed(2)}<br>`;
    html += `<br><strong>Disbursements</strong><br>`;
    html += `<strong>Official Copies:</strong> £${lFees.officialCopies.toFixed(
      2
    )}<br>`;
    html += `<strong>Bankruptcy Search:</strong> £${lFees.bankruptcySearch.toFixed(
      2
    )}<br>`;
    html += `<strong>Land Registry Search:</strong> £${lFees.landRegistrySearch.toFixed(
      2
    )}<br>`;
    html += `<strong>Subtotal:</strong> £${lFees.disbursement.toFixed(2)}<br>`;
    html += `<br><strong>Total:</strong> £${lFees.totalPrice.toFixed(2)}<br>`;
  }

  html += `<br>Kind Regards,<br>My Property Conveyancer</body>
   </html>`;

  return html;
};
