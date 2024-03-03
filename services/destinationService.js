const destinationRepository = require("../repositories/destinationRepository");

const getDestinationsService = async (destinationType) => {
  try {
    const response = await destinationRepository.getDestination(
      destinationType
    );
    return response;
  } catch (err) {
    console.log("Error while fetching destination details: ", err);
  }
};

const addDestinationService = async (reqBody, destinationType) => {
  try {
    const response = await destinationRepository.addDestination(
      reqBody,
      destinationType
    );

    return response;
  } catch (err) {
    console.log("Error while adding destination data into database: ", err);
  }
};

module.exports = { getDestinationsService, addDestinationService };
