const router = require("express").Router();
const financialModelingController = require("../../controllers/financialModelingController");


router
  .route("/:id")
    .get(financialModelingController.incomeStatement)
        .get(financialModelingController.companyProfile)

  

module.exports = router;