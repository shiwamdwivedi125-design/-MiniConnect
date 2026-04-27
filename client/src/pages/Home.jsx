import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MoodFilter from '../components/MoodFilter';
import Stories from '../components/Stories';
import VibeMatchBanner from '../components/VibeMatchBanner';
import PostCard from '../components/PostCard';
import { Image as ImageIcon, Video, Calendar, Send } from 'lucide-react';

const Home = () => {
  const [serverStatus, setServerStatus] = useState('Connecting...');
  const [posts, setPosts] = useState([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      setPosts(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check Server Status
    axios.get('/api')
      .then(res => setServerStatus(res.data))
      .catch(err => setServerStatus('Server Offline ⚠️'));

    fetchPosts();
  }, []);

  const handlePostSubmit = async () => {
    if (!newPostContent.trim()) return;

    const postData = {
      author: 'Shiwam Dwivedi (Aap)',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      content: newPostContent,
      moodTags: ['🔥 Mood: Hype'],
      vibeReactions: [{ emoji: '🔥', count: '1' }]
    };

    try {
      await axios.post('/api/posts', postData);
      setNewPostContent('');
      fetchPosts(); // Refresh feed
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span style={{ fontSize: '10px', color: serverStatus.includes('Offline') ? '#ef4444' : '#10b981', opacity: 0.7 }}>
          ● {serverStatus}
        </span>
      </div>

      <MoodFilter />
      <Stories />
      <VibeMatchBanner />

      {/* Create Post Area */}
      <div className="glass-card" style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '12px' }}>
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" style={{ width: '40px', height: '40px', borderRadius: '10px' }} alt="User" />
          <textarea 
            placeholder="Kuch naya share karein..." 
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            style={{ flex: 1, background: 'transparent', border: 'none', color: 'white', fontSize: '15px', resize: 'none', outline: 'none', paddingTop: '8px' }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', gap: '16px', color: '#94a3b8' }}>
            <ImageIcon size={20} style={{ cursor: 'pointer' }} />
            <Video size={20} style={{ cursor: 'pointer' }} />
            <Calendar size={20} style={{ cursor: 'pointer' }} />
          </div>
          <button 
            onClick={handlePostSubmit}
            className="btn-primary" 
            style={{ padding: '6px 16px', fontSize: '13px' }}
          >
            Post <Send size={14} style={{ marginLeft: '4px' }} />
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '40px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#94a3b8' }}>Feed load ho raha hai...</p>
        ) : (
          Array.isArray(posts) && posts.map(post => (
            <PostCard key={post.id || post._id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
