import React from 'react';
import { Link } from 'react-router-dom';

const PropertyGrid = ({ properties }) => {
  return (
    <div className="property-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2rem 5%' }}>
      {properties.map(prop => {
        
        const imageUrl = prop.image?.startsWith('http') ? prop.image : `http://127.0.0.1:8000${prop.image}`;

        return (
          <Link to={`/property/${prop.id}`} key={prop.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="property-card" style={{ border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', transition: 'transform 0.3s', cursor: 'pointer' }}>
              <img 
                src={imageUrl} 
                alt={prop.name} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{prop.name}</h3>
                <p style={{ margin: '0 0 1rem 0', color: '#666' }}>📍 {prop.city}</p>
                <h4 style={{ margin: 0, color: '#007BFF' }}>{prop.price} ₺</h4>
                <button style={{ marginTop: '1rem', width: '100%', padding: '0.7rem', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                  View Details
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PropertyGrid;