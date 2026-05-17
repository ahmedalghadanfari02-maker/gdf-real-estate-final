import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Contact from './pages/Contact';
import Properties from './pages/Properties'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} /> 
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;