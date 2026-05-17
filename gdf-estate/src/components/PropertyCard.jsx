import React from 'react';

const PropertyCard = ({ property }) => { 

    const badgeText = property.status === 'sale' ? 'For Sale' : 'For Rent';
    const badgeClass = property.status === 'sale' ? 'status-sale' : 'status-rent';

    return (
        <div className="property-card">
            <div className={`status-badge ${badgeClass}`}>{badgeText}</div>
            
            <img src={`/${property.image}`} alt={property.name} className="property-img" />
            
            <div className="property-info">
                <h3>{property.name}</h3>
                <p>📍 {property.city}</p>
                <p className="price">{property.price}</p>
            </div>
        </div>
    );
};

export default PropertyCard;