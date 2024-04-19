import React, { useState } from 'react';
import '../css/button.css'

const DbButton = () => {
  const [status, setStatus] = useState('');

  const handleClick = async () => {
    try {
      // Attempt to connect to the database
      // Replace this with your actual database connection logic
      const response = await fetch('/check-connection');
      if (response.ok) {
        setStatus('Connected');
      } else {
        setStatus('Connection Failed');
      }
    } catch (error) {
      setStatus('Connection Failed');
      console.error('Error connecting to database:', error);
    }
  }

    return (
      <div className="container">
        <button className="custom-button" onClick={handleClick}>
          Check database connection
        </button>
        {status && <p>{status}</p>}
      </div>
    );
};

export default DbButton;