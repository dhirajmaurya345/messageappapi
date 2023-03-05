const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema(
  {
    senderId: {
      type: String,
      trim: true,
    },
    recieverId: {
      type: String,
    },
    message: {
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
