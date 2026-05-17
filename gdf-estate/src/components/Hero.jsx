import React from 'react';

const Hero = ({ 
    searchTerm, setSearchTerm, 
    selectedCity, setSelectedCity, 
    selectedStatus, setSelectedStatus 
}) => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Find Your Dream Property</h1>
                <p>Discover the best properties for rent and sale in Turkey.</p>
                
                <div className="filters">
                    
                    <input 
                        type="text" 
                        placeholder="Search (e.g., Villa, Studio)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    
                    
                    <select 
                        value={selectedCity} 
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="all">All Cities</option>
                        <option value="Istanbul">Istanbul</option>
                        <option value="Ankara">Ankara</option>
                        <option value="Antalya">Antalya</option>
                    </select>
                    
                    
                    <select 
                        value={selectedStatus} 
                        onChange={(e) => setSelectedStatus(e.target.value)}
                    >
                        <option value="all">All Statuses</option>
                        <option value="sale">For Sale</option>
                        <option value="rent">For Rent</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default Hero;