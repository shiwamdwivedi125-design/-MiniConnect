import React from 'react';

const Widgets = () => {
  const suggestions = [
    { name: 'Alex Johnson', role: 'Product Designer', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' },
    { name: 'Sarah Wilson', role: 'Developer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { name: 'Mike Ross', role: 'Lawyer', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
  ];

  return (
    <div style={{ width: '320px', position: 'sticky', top: '100px', height: 'fit-content', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px' }}>Who to connect</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {suggestions.map((person, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src={person.avatar} alt={person.name} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                <div>
                  <h4 style={{ fontSize: '14px', fontWeight: '500', margin: 0 }}>{person.name}</h4>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0 }}>{person.role}</p>
                </div>
              </div>
              <button className="btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>Connect</button>
            </div>
          ))}
        </div>
        <button style={{ width: '100%', background: 'transparent', border: 'none', color: '#6366f1', marginTop: '20px', fontSize: '14px', fontWeight: '500', cursor: 'pointer' }}>
          Show More
        </button>
      </div>

      <div className="glass-card" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Trending Topics</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ color: '#94a3b8', fontSize: '14px' }}>#MiniConnect <span style={{ float: 'right', color: '#6366f1' }}>12.5k</span></div>
          <div style={{ color: '#94a3b8', fontSize: '14px' }}>#DesignTrends <span style={{ float: 'right', color: '#6366f1' }}>8.2k</span></div>
          <div style={{ color: '#94a3b8', fontSize: '14px' }}>#ReactJS <span style={{ float: 'right', color: '#6366f1' }}>5.4k</span></div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
