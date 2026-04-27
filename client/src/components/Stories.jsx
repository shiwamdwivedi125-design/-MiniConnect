import React from 'react';
import { Plus } from 'lucide-react';

const Stories = () => {
  const stories = [
    { name: 'Priya', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { name: 'Arjun', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
    { name: 'Sneha', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' },
    { name: 'Rahul', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    { name: 'Ananya', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
  ];

  return (
    <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', marginBottom: '32px', padding: '4px' }} className="no-scrollbar">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px dashed #4b5563', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
          <Plus size={24} color="#94a3b8" />
        </div>
        <span style={{ fontSize: '11px', color: '#94a3b8' }}>Aapki</span>
      </div>
      {stories.map((story, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
          <div className="story-ring">
            <div style={{ width: '58px', height: '58px', borderRadius: '50%', border: '3px solid #020617', overflow: 'hidden' }}>
              <img src={story.avatar} alt={story.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
          <span style={{ fontSize: '11px', color: '#f8fafc' }}>{story.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
