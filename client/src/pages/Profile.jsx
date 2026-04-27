import React, { useState } from 'react';
import { Edit3, MapPin, Link as LinkIcon, Calendar, Grid, List, Bookmark, Settings } from 'lucide-react';
import PostCard from '../components/PostCard';

const Profile = () => {
  const [view, setView] = useState('grid');
  
  const user = {
    name: 'Shiwam Dwivedi',
    handle: '@shiwam_design',
    bio: 'Full Stack Designer & Developer. Building high-end digital experiences. Always connecting dots in the universe of tech. ✨',
    location: 'India',
    website: 'shiwam.design',
    joined: 'March 2024',
    followers: '2.5k',
    following: '480',
    cover: 'https://images.unsplash.com/photo-1614850523296-e8c1d473c727?w=1200&h=400&fit=crop',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop'
  };

  const highlights = [
    { label: 'Work', icon: '💼' },
    { label: 'Travel', icon: '✈️' },
    { label: 'Art', icon: '🎨' },
    { label: 'Music', icon: '🎵' },
  ];

  const myPosts = [
    {
      id: 1,
      author: 'Shiwam Dwivedi',
      avatar: user.avatar,
      time: '2 hours ago',
      location: 'Studio',
      content: 'Just launched the MiniConnect beta! 🚀 Excited to see how everyone connects and shares their creative ideas.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=450&fit=crop',
      likes: '1.2k',
      comments: 18,
      vibeReactions: [{ emoji: '🔥', count: '1k' }, { emoji: '🚀', count: '200' }]
    },
    {
      id: 2,
      author: 'Shiwam Dwivedi',
      avatar: user.avatar,
      time: '1 day ago',
      content: 'Working on a new design system for MiniConnect. Minimal, sleek, and high performance. 🔥',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=450&fit=crop',
      likes: '850',
      comments: 42,
      vibeReactions: [{ emoji: '🎯', count: '400' }, { emoji: '🎨', count: '450' }]
    }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', paddingBottom: '100px', maxWidth: '800px', margin: '0 auto' }}>
      <div className="glass-card overflow-hidden" style={{ borderRadius: '24px', overflow: 'hidden' }}>
        <div style={{ height: '180px', width: '100%', position: 'relative' }}>
          <img src={user.cover} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', gap: '12px' }}>
            <button style={{ background: 'rgba(0,0,0,0.5)', border: 'none', borderRadius: '8px', padding: '8px', color: 'white', cursor: 'pointer', backdropFilter: 'blur(8px)' }}>
              <Settings size={20} />
            </button>
          </div>
        </div>
        <div style={{ padding: '0 24px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '-50px' }}>
            <div style={{ position: 'relative' }}>
              <img src={user.avatar} style={{ width: '100px', height: '100px', borderRadius: '24px', border: '4px solid #020617' }} alt="Avatar" />
              <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '16px', height: '16px', background: '#10b981', borderRadius: '50%', border: '3px solid #020617' }}></div>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}>
              <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '14px' }}>
                <Edit3 size={16} />
                Edit Profile
              </button>
            </div>
          </div>
          
          <div style={{ marginTop: '16px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: '700', margin: 0 }}>{user.name}</h2>
            <p style={{ color: '#94a3b8', margin: '2px 0', fontSize: '14px' }}>{user.handle}</p>
            <p style={{ marginTop: '12px', fontSize: '14px', color: '#e2e8f0', lineHeight: '1.5' }}>{user.bio}</p>
            
            <div style={{ display: 'flex', gap: '20px', marginTop: '16px', color: '#94a3b8', fontSize: '13px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {user.location}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><LinkIcon size={14} /> {user.website}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Joined {user.joined}</span>
            </div>

            <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
              <span style={{ fontSize: '14px' }}><strong>{user.following}</strong> <span style={{ color: '#94a3b8' }}>Following</span></span>
              <span style={{ fontSize: '14px' }}><strong>{user.followers}</strong> <span style={{ color: '#94a3b8' }}>Followers</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', padding: '4px' }} className="no-scrollbar">
        {highlights.map((h, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
              {h.icon}
            </div>
            <span style={{ fontSize: '11px', color: '#94a3b8' }}>{h.label}</span>
          </div>
        ))}
      </div>

      <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', justifyContent: 'center', gap: '48px', marginTop: '12px' }}>
        <button 
          onClick={() => setView('grid')}
          style={{ background: 'transparent', border: 'none', color: view === 'grid' ? 'white' : '#94a3b8', borderBottom: view === 'grid' ? '2px solid #6366f1' : 'none', padding: '12px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <Grid size={18} />
          <span style={{ fontSize: '14px', fontWeight: '600' }}>Posts</span>
        </button>
        <button 
          onClick={() => setView('list')}
          style={{ background: 'transparent', border: 'none', color: view === 'list' ? 'white' : '#94a3b8', borderBottom: view === 'list' ? '2px solid #6366f1' : 'none', padding: '12px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <List size={18} />
          <span style={{ fontSize: '14px', fontWeight: '600' }}>List</span>
        </button>
        <button style={{ background: 'transparent', border: 'none', color: '#94a3b8', padding: '12px 0', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Bookmark size={18} />
          <span style={{ fontSize: '14px', fontWeight: '600' }}>Saved</span>
        </button>
      </div>

      <div style={{ 
        display: view === 'grid' ? 'grid' : 'flex', 
        flexDirection: view === 'grid' ? 'unset' : 'column',
        gridTemplateColumns: view === 'grid' ? 'repeat(3, 1fr)' : 'unset',
        gap: view === 'grid' ? '4px' : '24px',
        marginTop: '12px'
      }}>
        {view === 'grid' ? (
          myPosts.map(post => (
            <div key={post.id} style={{ aspectRatio: '1', overflow: 'hidden', cursor: 'pointer', position: 'relative' }} className="grid-item">
              <img src={post.image} alt="Post" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.3)', opacity: 0, transition: '0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }} className="overlay">
                <span style={{ color: 'white', fontWeight: '700' }}>❤️ {post.likes}</span>
                <span style={{ color: 'white', fontWeight: '700' }}>💬 {post.comments}</span>
              </div>
            </div>
          ))
        ) : (
          myPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
};

export default Profile;
