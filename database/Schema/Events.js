const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    place: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    like: { type: Number, required: true },
    disLike: { type: Number, required: true },
    seats: { type: Number, required: true },
    price: { type: Number, required: true }
  },
  {
    timestamps: true,
  }
);
const Events = mongoose.model("Event", eventSchema);
module.exports = Events;
