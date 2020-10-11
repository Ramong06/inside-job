const router = require("express").Router();
const profileController = require("../../controllers/profileController");


router
  .route("/:symbol")
  .get(profileController.find)

module.exports = router;