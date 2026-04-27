import React from 'react';
import { Home, Zap, PlusSquare, Compass, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Home size={24} />
        <span>Home</span>
      </NavLink>
      <NavLink to="/vibes" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Zap size={24} />
        <span>Vibes</span>
      </NavLink>
      <NavLink to="/create" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <div style={{ padding: '8px', background: 'linear-gradient(135deg, #6366f1, #c084fc)', borderRadius: '12px', marginTop: '-20px', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' }}>
          <PlusSquare size={24} color="white" />
        </div>
        <span>Create</span>
      </NavLink>
      <NavLink to="/explore" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <Compass size={24} />
        <span>Explore</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
        <User size={24} />
        <span>Profile</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
