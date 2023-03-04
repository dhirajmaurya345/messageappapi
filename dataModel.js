const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  name: {
    type: String,
       trim: true,
  },
  username: {
    type: Number,
   
  },
   message: {
    type: String,
    trim: true,
  },
  sendAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  recievedAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
 
});

const dataModel = new mongoose.model("dataModel", dataSchema);

module.exports = dataModel;
