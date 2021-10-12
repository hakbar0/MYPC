import { transporter } from "../../Config/config.js";

export const sendMail = async (sol, client, ET) => {
  const clientOptions = {
    from: '"My Property Conveyancer" <hello@mypropertyconveyancer.co.uk>', // Something like: Jane Doe <janedoe@gmail.com>
    to: sol.contact.email,
    subject: `New Lead - ${client.firstName}, ${client.type}`, // email subject
    html: ET,
  };

  transporter.sendMail(clientOptions, (erro, info) => {
    if (erro) {
      console.log(erro.toString());
      transport.close();
    }
    console.log("Sended");
    transport.close();
  });
};
