import React, { useState } from 'react';

const MoodFilter = () => {
  const moods = [
    { label: 'Hype', emoji: '🔥' },
    { label: 'Chill', emoji: '😎' },
    { label: 'Creative', emoji: '🎨' },
    { label: 'Learn', emoji: '💡' },
    { label: 'Deep', emoji: '🌊' },
  ];
  const [active, setActive] = useState('Hype');

  return (
    <div style={{ marginBottom: '24px' }}>
      <p style={{ fontSize: '11px', fontWeight: '600', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
        Aaj ka Mood Filter karein
      </p>
      <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '4px' }} className="no-scrollbar">
        {moods.map((mood) => (
          <button
            key={mood.label}
            className={`mood-pill ${active === mood.label ? 'active' : ''}`}
            onClick={() => setActive(mood.label)}
          >
            <span>{mood.emoji}</span>
            {mood.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodFilter;
