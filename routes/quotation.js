const router = require("express").Router();
const quotationController = require("../controllers/quotationController");

// @des Get all Destinations
// @route GET /api/destination/getDestinations
// @access public
router.route("/getQuotation").post(quotationController.setQuotationDetails);
router.route("/").get((req, res) => {
  res.status(200).send("Working good");
});

module.exports = router;
