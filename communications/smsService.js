const twilio = require("twilio");

const sendSMS = (msgBody, userContact) => {
  const accountSid = process.env.TWILIO_ACC_SID;
  const authToken = process.env.TWILIO_ACC_AUTH_TOKEN;

  const client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: msgBody,
      from: "+15085031172",
      to: "",
    })
    .then((message) => console.log(message.sid));
};

module.exports = { sendSMS };
