const router = require("express").Router();
const destinationController = require("../controllers/destinationController");

// @des Get all Destinations
// @route GET /api/destination/getDestinations
// @access public
router.route("/getDestinations").get(destinationController.getDestinations);

// @des to add new destinations
// @route POST /api/destination/addDestination
// @access public
router.route("/addDestination").post(destinationController.addDestination);

module.exports = router;
