const router = require("express").Router();

router.get("/test", (req, res) => {
  res.json({
    purpose: "test",
    name: "holiday heavens",
    port: "3000",
  });
});

module.exports = router;
