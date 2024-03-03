const enquiryRepository = require("../repositories/enquiryRepository");

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
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = { getEnquiryService, makeEnquiryService };
