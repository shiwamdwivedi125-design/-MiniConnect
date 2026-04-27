import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const DB_FILE = path.join(__dirname, 'posts.json');

app.use(cors());
app.use(express.json());

// Initialize DB file if not exists
const initDB = () => {
  if (!fs.existsSync(DB_FILE)) {
    const initialPosts = [
      {
        id: "1",
        author: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
        time: '2 ghante pehle',
        location: 'Mumbai',
        content: 'Space aur dreams ka ek creative collab 🚀 Arjun ne background banaya, maine illustration ki ✨',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=800&fit=crop',
        isCollab: true,
        moodTags: ['🔥 Mood: Hype', '🎨 Creative'],
        vibeReactions: [
          { emoji: '🔥', count: '2.4k' },
          { emoji: '😲', count: '891' }
        ],
        likes: '1.2k',
        comments: 110,
        isTimeCapsule: true
      },
      {
        id: "2",
        author: 'Arjun Music',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
        time: '4 ghante pehle',
        location: 'Studio Session',
        content: 'Naya track drop! 2 baje raat ko studio session 🎸 Kaisa laga batao!',
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop',
        type: 'music',
        moodTags: ['🔥 Mood: Hype', '🎵 Music'],
        vibeReactions: [
          { emoji: '🔥', count: '5.2k' },
          { emoji: '🎵', count: '1.2k' }
        ],
        likes: '5.1k',
        comments: 157
      }
    ];
    fs.writeFileSync(DB_FILE, JSON.stringify(initialPosts, null, 2));
    console.log('Database file created with initial posts.');
  }
};

initDB();

// Basic Route
app.get('/api', (req, res) => {
  res.send('MiniConnect API is running smoothly 🚀 (File-based DB)');
});

// GET all posts
app.get('/api/posts', (req, res) => {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ message: 'Error reading posts' });
  }
});

// POST a new post
app.post('/api/posts', (req, res) => {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    const posts = JSON.parse(data);
    const newPost = {
      id: Date.now().toString(),
      ...req.body,
      createdAt: new Date().toISOString()
    };
    posts.unshift(newPost);
    fs.writeFileSync(DB_FILE, JSON.stringify(posts, null, 2));
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: 'Error saving post' });
  }
});

export default app;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
