const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  name: { type: String },
  rating: { type: String },
  reviews: { type: String },
  ticker: { type: String },
  salary: { type: Object },
});

const Company = mongoose.model("Company", salarySchema);

module.exports = Company;