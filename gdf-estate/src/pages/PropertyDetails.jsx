import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/properties/${id}/`)
      .then(response => response.json())
      .then(data => {
        setProperty(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching property:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 style={{textAlign: 'center', marginTop: '100px'}}>Loading Property Details... ⏳</h2>;
  if (!property) return <h2 style={{textAlign: 'center', marginTop: '100px', color: 'red'}}>Property Not Found! ❌</h2>;

  
  const imageUrl = property.image 
    ? (property.image.startsWith('http') ? property.image : `http://127.0.0.1:8000${property.image}`) 
    : '';

  return (
    <div style={{ padding: '2rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#007BFF', fontSize: '1.1rem', fontWeight: 'bold' }}>
        &larr; Back to Properties
      </Link>
      
      <div style={{ display: 'flex', gap: '3rem', marginTop: '2rem', flexWrap: 'wrap', background: '#fff', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        
        
        <div style={{ flex: '1 1 400px' }}>
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={property.name} 
              style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', objectFit: 'cover', maxHeight: '500px' }} 
            />
          ) : (
            <div style={{ width: '100%', height: '300px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '15px' }}>
              No Image Available
            </div>
          )}
        </div>
        
        
        <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ color: '#333', marginBottom: '1rem', fontSize: '2.5rem' }}>{property.name}</h1>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '0.8rem' }}><strong>📍 City:</strong> {property.city}</p>
          <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '0.8rem' }}>
            <strong>🏷️ Status:</strong> <span style={{ background: property.status === 'sale' ? '#dc3545' : '#28a745', color: '#fff', padding: '0.2rem 0.8rem', borderRadius: '15px', fontSize: '1rem' }}>For {property.status}</span>
          </p>
          
          <h2 style={{ color: '#007BFF', fontSize: '2rem', margin: '1.5rem 0' }}>{property.price} ₺</h2>
          
          <button style={{ padding: '1rem', background: '#333', color: '#fff', border: 'none', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer', transition: '0.3s' }}>
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;