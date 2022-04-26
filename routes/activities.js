var express = require("express");
var router = express.Router();
var Activity = require("../models/Activity");

/* GET users listing. */
router.post("/getTracking", async function (req, res, next) {
  try {
    const { workspaceId, taskId, userId } = req.body;

    const userActivities = await Activity.count({
      userId: userId,
      workspaceId: workspaceId,
      taskId: taskId,
    });

    res.send({
      taskId: taskId,
      workspaceId: workspaceId,
      activityCount: userActivities,
    });
  } catch (e) {
    console.log("ERROR: ", e);
  }
});

router.post("/tracking", async function (req, res, next) {
  try {
    const { workspaceId, taskId, userId } = req.body;

    const activity = new Activity({
      userId: userId,
      workspaceId: workspaceId,
      taskId: taskId,
    });

    await activity.save();
    res.send({ success: true });
  } catch (e) {
    console.log("ERROR: ", e);
  }
});

module.exports = router;
