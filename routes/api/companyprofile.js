const router = require("express").Router();
const financialModelingController = require("../../controllers/financialModelingController");


console.log("Copmany Profile Router");
router
  .route("/:id")
  .get(financialModelingController.companyProfile);

module.exports = router;
