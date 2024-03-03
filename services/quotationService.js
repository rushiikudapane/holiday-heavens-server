const quotationRepository = require("../repositories/quotationRepository");
const { sendSMS } = require("../communications/smsService");
const { sendEmail } = require("../communications/mailService");

const setQuotationDetailsService = async (userData) => {
  try {
    const response = await quotationRepository.setQuotationDetails(userData);
    // const smsBody = `Thanks ${userData.name} for making enquiry at Holiday Heavens. We will make sure that you will get best service. Our executive will reach you out soon, Have a great Day!`;
    // sendSMS(smsBody, userData.contact);
    sendEmail(userData.mailid, userData.name);
    return response;
  } catch (err) {
    console.log("Error while adding usser details for quotation: ", err);
  }
};

module.exports = { setQuotationDetailsService };
