const db = require("../models");

// Defining methods for the profileController
module.exports = {
  //TODO Need to add FindAll
  //Grabs the Company Profile info from the Mongoose model using the ticker -> Returns and Object
  find: function(req, res) {
    db.Profile.findOne({ symbol: req.params.symbol })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
};
