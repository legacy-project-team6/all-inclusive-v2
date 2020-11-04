const mongoose = require("mongoose");
const companySchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    name: { type: String, required: true },
    emailCompany: { type: String, required: true },
    passwordCompany: { type: String, required: true },
    phoneNumberCompany: { type: String, required: true },
    adress: { type: String, required: true },
    imgUrlCompany: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Company", companySchema);
