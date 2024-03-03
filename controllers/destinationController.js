const destinationService = require("../services/destinationService");

const getDestinations = async (req, res) => {
  try {
    const destinationType = req.query.type;
    const destinations = await destinationService.getDestinationsService(
      destinationType
    );
    res.status(200).send(destinations);
  } catch (err) {
    console.log(err);
  }
};

const addDestination = async (req, res) => {
  const destinationType = req.query.type;
  const reqBody = req.body;

  try {
    const result = await destinationService.addDestinationService(
      reqBody,
      destinationType
    );
    res.status(200).send("Destination has been added");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getDestinations, addDestination };
