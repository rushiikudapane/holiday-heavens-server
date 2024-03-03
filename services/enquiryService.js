const enquiryRepository = require("../repositories/enquiryRepository");
const sendSMS = require("../communications/smsService");
const { sendEmail } = require("../communications/mailService");

const getEnquiryService = () => {
  try {
    const response = enquiryRepository.getEnquiry();
    return response;
  } catch (err) {
    console.log(err);
    return { message: "Error occured while fetching enquiries" };
  }
};

const makeEnquiryService = (reqBody) => {
  const {
    enquiryName,
    enquiryEmail,
    enquiryContactNo,
    enquiryTotalPeople,
    enquiryDate,
    enquiryDestination,
    enquiryMessage,
  } = reqBody;
  try {
    enquiryRepository.makeEnquiry(
      enquiryName,
      enquiryEmail,
      enquiryContactNo,
      enquiryTotalPeople,
      enquiryDate,
      enquiryDestination,
      enquiryMessage
    );

    // const smsBody = `Thanks ${enquiryName} for making enquiry at Holiday Heavens. We will make sure that you will get best service. Our executive will reach you out soon, Have a great Day!`;

    // sendSMS(smsBody, enquiryContactNo);
    sendEmail(enquiryEmail, enquiryName);

    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { getEnquiryService, makeEnquiryService };
