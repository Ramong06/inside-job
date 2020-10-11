const router = require("express").Router();
const companyController = require("../../controllers/companyController");


router
  .route("/:ticker")
    .get(companyController.findByTicker)

module.exports = router;