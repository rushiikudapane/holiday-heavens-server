const quotationService = require("../services/quotationService");

const setQuotationDetails = async (req, res) => {
  try {
    const userData = req.body;
    const destinations = await quotationService.setQuotationDetailsService(
      userData
    );
    res.status(200).send("User Details forn quotation has been stored");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { setQuotationDetails };
