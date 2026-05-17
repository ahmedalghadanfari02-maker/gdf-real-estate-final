import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Contact Form Submitted:', formData);
    
    
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ padding: '3rem 5%', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '1rem', fontSize: '2.5rem' }}>Contact Us</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2.5rem' }}>Have any questions? We'd love to hear from you.</p>
      
      {submitted ? (
        <div style={{ background: '#28a745', color: '#fff', padding: '2rem', borderRadius: '10px', textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', boxShadow: '0 4px 12px rgba(40,167,69,0.2)' }}>
          Thank you! Your message has been sent successfully. ✉️🎉
          <button onClick={() => setSubmitted(false)} style={{ display: 'block', margin: '1.5rem auto 0 auto', padding: '0.5rem 1rem', background: '#fff', color: '#28a745', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '2.5rem', borderRadius: '15px', boxShadow: '0 8px 25px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#444' }}>Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#444' }}>Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#444' }}>Subject</label>
            <input 
              type="text" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }}
              placeholder="Inquiry about Bosphorus Villa"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#444' }}>Message</label>
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              rows="5" 
              style={{ width: '100%', padding: '0.8rem', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem', resize: 'vertical' }}
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit" style={{ padding: '1rem', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s', marginTop: '1rem', boxShadow: '0 4px 12px rgba(0,123,255,0.3)' }}>
            Send Message 🚀
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;