const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //TODO Need to add FindAll
  //Grabs the Salary info from the Mongoose model using the ticker -> Returns and Object
  findByTicker: function (req, res) {
    db.Salary.findOne({ ticker: req.params.ticker })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Salary.findOne({ id: req.params.ticker })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

   findAll: function(req, res) {
    db.Salary.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  },
};
