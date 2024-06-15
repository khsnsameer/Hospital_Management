import React, { useState } from 'react';
import './Patient_info.css';
 
const Patient_info = () => {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    dateOfBirth: '',
    symptoms: '',
    concerns: '',
    firstTimeVisit: false,
  });
 
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can handle form submission here, like sending the data to an API
  };
 
  return (
    <form onSubmit={handleSubmit} className="patient-form">
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
 
      <div>
        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          name="place"
          value={formData.place}
          onChange={handleChange}
          required
        />
      </div>
 
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
 
      <div>
        <label htmlFor="symptoms">Symptoms:</label>
        <textarea
          id="symptoms"
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
        ></textarea>
      </div>
 
      <div>
        <label htmlFor="concerns">Concerns:</label>
        <textarea
          id="concerns"
          name="concerns"
          value={formData.concerns}
          onChange={handleChange}
        ></textarea>
      </div>
 
      <div>
        <label htmlFor="firstTimeVisit">First Time Visit:</label>
        <input
          type="checkbox"
          id="firstTimeVisit"
          name="firstTimeVisit"
          checked={formData.firstTimeVisit}
          onChange={handleChange}
        />
      </div>
 
      <button type="submit">Submit</button>
    </form>
  );
};
 
export default Patient_info;