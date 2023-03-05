const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      trim: true,
    },
    recieverId: {
      type: Number,
    },
    message: {
      type: String,
      trim: true,
    },
    smsto: {
      type: String,
      trim: true,
    },
    smsfrom: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

const dataModel = new mongoose.model("dataModel", dataSchema);

module.exports = dataModel;
