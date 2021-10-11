import { Config } from "../../Config/config.js";

import Twilio from "twilio";

export const whatsApp = async (template, companyNumber) => {
  const { accountSid, authToken, number, msid } = Config.WhatsApp;
  const client = Twilio(accountSid, authToken);

  if (companyNumber.active) {
    companyNumber.numbers.forEach((tel) => {
      await client.messages.create({
        body: template,
        from: number,
        messagingServiceSid: msid,
        to: "whatsapp:" + tel,
      });
    });
  }
};
