const router = require("express").Router();
const financialModelingController = require("../../controllers/financialModelingController");
//Best Practice to not have 2 Get routes on the same Path
router
  .route("/:id")
  .get(financialModelingController.incomeStatement)
  .get(financialModelingController.companyProfile);

module.exports = router;
