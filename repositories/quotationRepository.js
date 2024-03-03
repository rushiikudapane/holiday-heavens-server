const quotationUserSchema = require("../models/quotationUserSchema");

const setQuotationDetails = async (userData) => {
  const { name, mailid, contact, whatsapp, question, destinationName } =
    userData;

  try {
    const newUser = new quotationUserSchema({
      name,
      mailid,
      contact,
      whatsapp,
      question,
      destinationName,
    });
    await newUser.save();
  } catch (err) {
    console.log(
      "Error While Adding userData about quotation into Database: ",
      err
    );
    return;
  }
};

module.exports = { setQuotationDetails };
