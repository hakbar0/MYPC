import { emailTemplate } from "../EmailTemplates/callBackET.js";
export const cEmailTemp = (lead) => {
  const { name, availability, tel } = lead;
  let avail = "";
  if (availability === "Anytime") {
    avail = "ASAP";
  } else {
    avail = `in the ${availability.toLowerCase()}.`;
  }
  return emailTemplate(name, avail, tel);
};
