import React, { useState } from 'react';

const DemoSchedulingForm = () => {
  // State to store form data
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [numEmployees, setNumEmployees] = useState('');
  const [headquarters, setHeadquarters] = useState('');
  const [source, setSource] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form data in localStorage
    localStorage.setItem('email', email);
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('companyName', companyName);
    localStorage.setItem('numEmployees', numEmployees);
    localStorage.setItem('headquarters', headquarters);
    localStorage.setItem('source', source);

    // Reset form after submission
    setEmail('');
    setFullName('');
    setCompanyName('');
    setNumEmployees('');
    setHeadquarters('');
    setSource('');
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <h1>See Rippling in Action</h1>
      <span>Schedule a 30-minute product demo with expert Q&A.</span>

      <div className="form-cont">
        <input
          type="email"
          id="email"
          placeholder="Work email address"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-cont">
        <input
          type="text"
          id="fullName"
          placeholder="Full name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="form-cont">
        <input
          type="text"
          id="companyName"
          placeholder="Company name"
          required
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      <div className="form-cont">
        <input
          type="number"
          id="numEmployees"
          placeholder="Estimated number of employees"
          required
          value={numEmployees}
          onChange={(e) => setNumEmployees(e.target.value)}
        />
      </div>

      <div className="form-cont">
        <select
          id="headquarters"
          required
          value={headquarters}
          onChange={(e) => setHeadquarters(e.target.value)}
        >
          <option value="">Select Headquarters Location</option>
          <option value="India">India</option>
          <option value="Taiwan">Taiwan</option>
          <option value="USA">USA</option>
        </select>
      </div>

      <div className="form-cont">
        <input
          type="text"
          id="source"
          placeholder="How did you hear about us?"
          required
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </div>

      <button type="submit" className="Submit">Schedule Demo</button>

      <p>By clicking "Schedule Demo" you agree to Rippling’s Privacy Notice.</p>
    </form>
  );
};

export default DemoSchedulingForm;
