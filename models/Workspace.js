import mongoose, { Schema } from 'mongoose';

const workspaceSchema = new mongoose.Schema({
  workspaceId: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  }
}, { timestamps: true });

const Workspace = mongoose.model('workspace', workspaceSchema);

module.exports = Workspace;
