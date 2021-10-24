import { emailTemplate } from "../EmailTemplates/joinusET.js";
export const jEmailTemp = (lead) => {
  const { name } = lead;
  return emailTemplate(name);
};
