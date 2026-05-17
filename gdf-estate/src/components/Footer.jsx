import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '2rem 0', marginTop: '4rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
                <div>
                    <h3 style={{ color: '#007BFF', marginBottom: '1rem' }}>GDF.Estate</h3>
                    <p>Your trusted partner in finding<br/>the perfect property in Turkey.</p>
                </div>
                <div>
                    <h3 style={{ marginBottom: '1rem' }}>Contact Info</h3>
                    <p>📍 Istanbul, Turkey</p>
                    <p>📧 info@gdf-estate.com</p>
                </div>
            </div>
            <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #333', color: '#888' }}>
                <p>&copy; 2024 GDF.Estate. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;