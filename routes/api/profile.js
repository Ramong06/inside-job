const router = require("express").Router();
const profileController = require("../../controllers/profileController");


router
  .route("/:name")
  .get(profileController.findAll)

module.exports = router;