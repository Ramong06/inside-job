const router = require("express").Router();
const companyController = require("../../controllers/companyController");


router
  .route("/:id")
    .get(companyController.findByTicker)

module.exports = router;