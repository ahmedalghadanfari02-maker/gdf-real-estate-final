import React, { useState, useEffect } from 'react';
import PropertyGrid from '../components/PropertyGrid';

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/properties/')
      .then(response => response.json())
      .then(data => {
        setProperties(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Loading All Properties... ⏳</h2>;

  const filteredProperties = properties.filter(prop => {
    
    const matchesSearch = prop.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prop.city.toLowerCase().includes(searchTerm.toLowerCase());
    
    
    const matchesStatus = filterStatus === 'all' || prop.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ padding: '2rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginTop: '1rem', fontSize: '2.5rem' }}>Find Your Dream Property</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>Search and filter through our exclusive collection.</p>
      
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '3rem', flexWrap: 'wrap', background: '#fff', padding: '1.5rem', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        
        
        <input 
          type="text" 
          placeholder="Search by name or city (e.g. Istanbul)..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ flex: '1 1 300px', padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none' }}
        />

        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', outline: 'none', cursor: 'pointer', background: '#f9f9f9' }}
        >
          <option value="all">All Status</option>
          <option value="sale">For Sale</option>
          <option value="rent">For Rent</option>
        </select>
      </div>
      
      
      {filteredProperties.length > 0 ? (
        <PropertyGrid properties={filteredProperties} />
      ) : (
        <h3 style={{ textAlign: 'center', color: '#dc3545', marginTop: '3rem' }}>No properties match your search criteria. 🚫</h3>
      )}
    </div>
  );
};

export default Properties;