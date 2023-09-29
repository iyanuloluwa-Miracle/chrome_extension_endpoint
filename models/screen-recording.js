const mongoose = require("mongoose");

const screenRecordingSchema = new mongoose.Schema({
  video: {
    type: Buffer,
    required: true,
  },
});

module.exports = mongoose.model("ScreenRecording", screenRecordingSchema);