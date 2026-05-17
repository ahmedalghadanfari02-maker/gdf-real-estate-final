import React, { useState, useEffect } from 'react';
import FeaturedSlider from '../components/FeaturedSlider';
import PropertyGrid from '../components/PropertyGrid';
import FeaturesSection from '../components/FeaturesSection'; 
import CTASection from '../components/CTASection'; 

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/properties/')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div>
      
      <FeaturedSlider properties={properties} />
      
      
      <FeaturesSection />
      
      
      <div style={{ padding: '0 5%' }}>
        <h2 style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem', color: '#333', fontSize: '2.5rem' }}>
          Our Featured Properties
        </h2>
        <PropertyGrid properties={properties.slice(0, 3)} />
      </div>

      
      <CTASection />
    </div>
  );
};

export default Home;