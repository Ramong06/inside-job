const router = require("express").Router();
const profileController = require("../../controllers/financialModelingController");


router
  .route("/:name")
  .get(profileController.findAll)

module.exports = router;