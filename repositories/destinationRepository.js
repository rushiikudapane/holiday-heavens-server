const campSchema = require("../models/campSchema");
const resortSchema = require("../models/resortSchema");

const getDestination = async (destinationType) => {
  try {
    if (destinationType == "camp") {
      const response = await campSchema.find();
      return response;
    }
    if (destinationType == "resort") {
      const response = await resortSchema.find();
      return response;
    }
  } catch (err) {
    console.log("Error at repo while fetching estination data: ", err);
  }
};

const addDestination = async (reqBody, destinationType) => {
  const {
    name,
    location,
    actualVegPrice,
    discountedVegPrice,
    actualNonVegPrice,
    discountedNonVegPrice,
    duration,
    overview,
  } = reqBody;

  try {
    let newDestination;
    if (destinationType == "resort") {
      newDestination = new resortSchema({
        name,
        location,
        actualVegPrice,
        discountedVegPrice,
        actualNonVegPrice,
        discountedNonVegPrice,
        duration,
        overview,
      });
    }
    if (destinationType == "camp") {
      newDestination = new campSchema({
        name,
        location,
        actualVegPrice,
        discountedVegPrice,
        actualNonVegPrice,
        discountedNonVegPrice,
        duration,
        overview,
      });
    }

    await newDestination.save();
  } catch (err) {
    console.log("Error While Adding data into Database: ", err);
    return;
  }
};

module.exports = { getDestination, addDestination };
