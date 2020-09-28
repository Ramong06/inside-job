const router = require("express").Router();
const profileController = require("../../controllers/profileController");


router
  .route("/:id")
    .get(profileController.findById)
    .get(profileController.findByTicker)

module.exports = router;