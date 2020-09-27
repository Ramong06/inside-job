const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  ticker: { type: String },
  name: { type: String },
  salary: { type: Object }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;