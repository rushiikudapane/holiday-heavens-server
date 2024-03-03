const mailService = require("../services/mailService");

const sendEmail = async (req, res) => {
  const reqBody = req.body;

  try {
    const result = await mailService.sendEmailService(reqBody);
    if (result) {
      res.status(200).send("Email has been sent");
    } else {
      res.status(500).send("Error occured while sending email!!!");
    }
  } catch (err) {
    console.log(err);
  }
};
