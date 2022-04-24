var mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: {
    type: String,
    default: '',
  },
  workspace: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
