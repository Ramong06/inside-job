const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  ticker: { type: String },
  name: { type: String },
  salary: { type: Object },
  rating: { type: String },
  review: { type: String },
});

const Company = mongoose.model("Company", salarySchema);

module.exports = Company;