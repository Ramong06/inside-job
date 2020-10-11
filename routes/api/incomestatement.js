const router = require("express").Router();
const financialModelingController = require("../../controllers/financialModelingController");

router
  .route("/:id")
  .get(financialModelingController.incomeStatement)

module.exports = router;
