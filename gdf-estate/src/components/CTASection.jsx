import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #007BFF, #00d2ff)', 
      padding: '5rem 5%', 
      textAlign: 'center', 
      color: '#fff', 
      marginTop: '4rem' 
    }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
        Ready to find your dream home?
      </h2>
      <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
        Contact our team today to get a free consultation and discover the best properties that match your lifestyle.
      </p>
      <Link to="/contact" style={{ 
        display: 'inline-block',
        padding: '1rem 2.5rem', 
        background: '#fff', 
        color: '#007BFF', 
        textDecoration: 'none', 
        borderRadius: '30px', 
        fontWeight: 'bold', 
        fontSize: '1.2rem', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease'
      }}>
        Contact Us Now 🚀
      </Link>
    </div>
  );
};

export default CTASection;