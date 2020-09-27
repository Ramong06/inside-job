const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    ticker: { type: String, required: true },
    name: { type: String, required: true },
    currency: { type: String },
    stockExchange: { type: String },
    exchangeShortName: { type: String }
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;