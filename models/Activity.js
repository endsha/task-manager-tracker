var mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  userId: {
    type: String,
    default: '',
  },
  taskId: {
    type: String,
    default: '',
  },
  workspaceId: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
