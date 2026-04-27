import React from 'react';
import { Sparkles } from 'lucide-react';

const VibeMatchBanner = () => {
  return (
    <div className="glass-card" style={{ 
      padding: '20px', 
      marginBottom: '32px', 
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(244, 114, 182, 0.1))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Sparkles size={24} color="#f472b6" />
        </div>
        <div>
          <h4 style={{ fontSize: '15px', fontWeight: '600', margin: 0 }}>Vibe Match — <span style={{ color: '#f472b6' }}>4 log online hain</span></h4>
          <p style={{ fontSize: '12px', color: '#94a3b8', margin: '4px 0 0' }}>Similar mood + interest wale log aapke qareeb hain</p>
        </div>
      </div>
      <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>New ✨</button>
    </div>
  );
};

export default VibeMatchBanner;
