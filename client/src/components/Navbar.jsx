import React from 'react';
import { Bell, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="glass-nav" style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '12px 24px', 
      zIndex: 1000 
    }}>
      
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #6366f1, #c084fc)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '16px' }}>M</span>
        </div>
        <h1 style={{ color: 'white', fontSize: '18px', fontWeight: '700', margin: 0 }}>MiniConnect</h1>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ position: 'relative' }}>
          <Bell size={22} color="#94a3b8" style={{ cursor: 'pointer' }} />
          <div style={{ position: 'absolute', top: -2, right: -2, width: '8px', height: '8px', background: '#f472b6', borderRadius: '50%', border: '2px solid #020617' }}></div>
        </div>
        <MessageSquare size={22} color="#94a3b8" style={{ cursor: 'pointer' }} />
      </div>
    </nav>
  );
};

export default Navbar;
