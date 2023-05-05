const mongoose = require("mongoose");

let imageSchema = new mongoose.Schema({
  fileLocation: {
    type: String,
    required: true,
    unique: true,
  }
})

module.exports = mongoose.model("Image", imageSchema);