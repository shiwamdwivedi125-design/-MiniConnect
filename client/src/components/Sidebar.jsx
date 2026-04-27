import React from 'react';
import { Home, Compass, User, Settings, LogOut, Bookmark } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', path: '/' },
    { icon: <Compass size={20} />, label: 'Explore', path: '/explore' },
    { icon: <User size={20} />, label: 'Profile', path: '/profile' },
    { icon: <Bookmark size={20} />, label: 'Saved', path: '/saved' },
    { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside style={{ width: '280px', position: 'sticky', top: '100px', height: 'fit-content' }}>
      <div className="glass-card" style={{ padding: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {menuItems.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.path}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px 16px',
                borderRadius: '12px',
                textDecoration: 'none',
                color: isActive ? 'white' : '#94a3b8',
                background: isActive ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                transition: '0.3s'
              })}
            >
              {item.icon}
              <span style={{ fontWeight: '500' }}>{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <button style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px', 
            padding: '12px 16px', 
            width: '100%',
            background: 'transparent',
            border: 'none',
            color: '#ef4444',
            cursor: 'pointer',
            fontWeight: '500'
          }}>
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
