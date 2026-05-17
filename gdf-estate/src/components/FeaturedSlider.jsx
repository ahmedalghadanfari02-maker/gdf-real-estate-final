import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FeaturedSlider = ({ properties }) => {
  
  const featured = properties.slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (featured.length === 0) return null;

  const currentProp = featured[currentIndex];
  
   
  const imageUrl = currentProp.image?.startsWith('http') 
    ? currentProp.image 
    : `http://127.0.0.1:8000${currentProp.image}`;

  const nextSlide = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % featured.length);
  };

  const prevSlide = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length);
  };

  return (
    <div style={{ position: 'relative', width: '90%', height: '400px', margin: '2rem auto', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>
      
      
      <div style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%'
      }}>
        
        
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.45)', zIndex: 1 }}></div>

        <div style={{ position: 'relative', zIndex: 2, color: '#fff', maxWidth: '600px' }}>
          <span style={{ background: '#f1c40f', color: '#000', padding: '0.4rem 1rem', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            VIP Featured Property
          </span>
          
          <h1 style={{ fontSize: '2.8rem', margin: '1rem 0 0.5rem 0', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
            {currentProp.name}
          </h1>
          
          <p style={{ fontSize: '1.3rem', margin: '0 0 1.5rem 0', opacity: 0.9 }}>
            📍 {currentProp.city}
          </p>
          
          <h2 style={{ color: '#2ecc71', fontSize: '2.2rem', margin: '0 0 2rem 0', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            {currentProp.price} ₺
          </h2>
          
          <Link to={`/property/${currentProp.id}`} style={{ padding: '1rem 2rem', background: '#007BFF', color: '#fff', textDecoration: 'none', borderRadius: '30px', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 4px 15px rgba(0,123,255,0.4)', transition: '0.3s' }}>
            View Details
          </Link>
        </div>
      </div>

      {}
      <button onClick={prevSlide} style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: 'rgba(255,255,255,0.8)', border: 'none', width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
        &larr;
      </button>
      <button onClick={nextSlide} style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 3, background: 'rgba(255,255,255,0.8)', border: 'none', width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
        &rarr;
      </button>
    </div>
  );
};

export default FeaturedSlider;