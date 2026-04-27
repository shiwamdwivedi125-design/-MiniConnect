import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  author: { type: String, required: true },
  avatar: { type: String, default: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
  time: { type: String, default: 'Abhi' },
  location: { type: String },
  content: { type: String, required: true },
  image: { type: String },
  likes: { type: String, default: '0' },
  comments: { type: Number, default: 0 },
  isCollab: { type: Boolean, default: false },
  isTimeCapsule: { type: Boolean, default: false },
  moodTags: [String],
  vibeReactions: [{
    emoji: String,
    count: String
  }],
  type: { type: String, default: 'standard' }
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);
export default Post;
