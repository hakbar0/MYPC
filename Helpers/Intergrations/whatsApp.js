import { whatsAppCred } from "../../Config/config.js";

import Twilio from "twilio";

export const whatsApp = async (template, cNum) => {
  const { accountSid, authToken, number, msid } = whatsAppCred;
  const client = Twilio(accountSid, authToken);

  cNum.map(async (tel) => {
    await client.messages.create({
      body: template,
      from: number,
      messagingServiceSid: msid,
      to: "whatsapp:" + tel,
    });
  });
};
