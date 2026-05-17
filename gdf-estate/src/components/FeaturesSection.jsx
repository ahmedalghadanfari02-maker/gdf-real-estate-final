import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: '🏢',
      title: 'Prime Locations',
      description: 'We offer the most exclusive properties across Istanbul and other major cities.'
    },
    {
      icon: '🤝',
      title: 'Trusted Agents',
      description: 'Our certified real estate experts are here to guide you every step of the way.'
    },
    {
      icon: '💰',
      title: 'Best Prices',
      description: 'Get the best market value with our transparent and competitive pricing.'
    }
  ];

  return (
    <div style={{ padding: '4rem 5%', background: '#f8f9fa', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', color: '#333', marginBottom: '1rem' }}>Why Choose GDF Estate?</h2>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '3rem' }}>We provide a seamless experience for finding your dream home.</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {features.map((feature, index) => (
          <div key={index} style={{ flex: '1 1 300px', background: '#fff', padding: '2rem', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s' }} className="feature-card">
            <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{feature.icon}</div>
            <h3 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>{feature.title}</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;