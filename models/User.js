import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const User = mongoose.model('user', userSchema);

module.exports = User;
