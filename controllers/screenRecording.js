// controllers/screen-recording-controller.js
require('../models/database')
const ScreenRecording = require("../models/screen-recording");

class ScreenRecordingController {
  static async createScreenRecording(req, res) {
    const video = req.files.video;

    const screenRecording = new ScreenRecording({
      video: video.data,
    });

    await screenRecording.save();

    res.json({
      success: true,
      url: `/screen-recordings/${screenRecording.id}`,
    });
  }

  static async getScreenRecording(req, res) {
    const screenRecording = await ScreenRecording.findById(req.params.id);

    res.setHeader("Content-Type", "video/mp4");

    res.send(screenRecording.video);
  }
}

module.exports = ScreenRecordingController;