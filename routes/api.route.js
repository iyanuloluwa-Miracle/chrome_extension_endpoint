const router = require('express').Router();
const ScreenRecordingController = require("../controllers/screenRecording");


router.post("/api/v1/screen-recordings", ScreenRecordingController.createScreenRecording);
router.get("/screen-recordings/:id", ScreenRecordingController.getScreenRecording);


router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

module.exports = router;
