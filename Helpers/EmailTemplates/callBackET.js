export const emailTemplate = (name, availability, tel) => {
  const html = `Hey ${name},<br><br>
   Thanks for requesting a call-back and letting us know about your availability.<br>
    A member of our team will get in touch ${availability}
    <br><br>Contact Number Provided: ${tel}
    <br><br>Kind Regards,<br>My Property Conveyancer<br>
    <a href="https://www.mypropertyconveyancer.co.uk/" target="_blank"><span style='font-size:16px;font-family:"Trebuchet MS",sans-serif;color:#09757A;background:white;'>https://www.MyPropertyConveyancer.co.uk</span></a>`;

  return html;
};
