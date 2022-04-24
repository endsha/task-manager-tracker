var express = require("express");
var router = express.Router();
var Activity = require("../models/Activity");

/* GET users listing. */
router.post("/getTracking", async function (req, res, next) {
  try {
    const userActivities = await Activity.count({
      user: req.body.user,
      workspace: req.body.workspace,
    });

    res.send({trackingCount: userActivities});
  } catch (e) {
    console.log("ERROR: ", e);
  }
});

router.post("/tracking", function (req, res, next) {
  try {
    const activity = new Activity({
      user: req.body.user,
      workspace: req.body.workspace,
    });

    activity.save();
    res.send({success: true});
  } catch (e) {
    console.log("ERROR: ", e);
  }
});

module.exports = router;
