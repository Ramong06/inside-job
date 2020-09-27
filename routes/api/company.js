const router = require("express").Router();
const companyController = require("../../controllers/companyController");

router.route("/")
  .get(companyController.findAll)
  .post(companyController.create);

router
  .route("/:id")
  .get(companyController.findById)
  .put(companyController.update)
  .delete(companyController.remove);

module.exports = router;