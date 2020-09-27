const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const salarySchema = new Schema({
  ticker: { type: String },
  name: { type: String },
  salary: { type: Object }
});

const Salary = mongoose.model("Salary", salarySchema);

module.exports = Salary;