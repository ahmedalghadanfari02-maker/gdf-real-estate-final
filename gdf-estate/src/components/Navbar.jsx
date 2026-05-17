import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', backgroundColor: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
      
      <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', textDecoration: 'none' }}>
        GDF.<span style={{ color: '#007BFF' }}>Estate</span>
      </Link>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Home</Link>
        <Link to="/properties" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Properties</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Contact</Link>
        <button 
          onClick={toggleDarkMode}
          style={{ 
            padding: '0.5rem 1rem', 
            borderRadius: '20px', 
            border: `1px solid ${isDarkMode ? '#f1c40f' : '#007BFF'}`, 
            backgroundColor: isDarkMode ? '#f1c40f' : 'transparent', 
            color: isDarkMode ? '#121212' : '#007BFF', 
            cursor: 'pointer', 
            fontWeight: 'bold',
            transition: '0.3s'
          }}
        >
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

    </nav>
  );
};

export default Navbar;