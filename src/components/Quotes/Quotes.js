import React, { useState, useEffect } from 'react';
import './Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(, { method: 'GET' });
        const data = await result.json();
        setQuote(data);
      } catch (error) {
        return {
          Response: 'False',
          Error: error.message || 'Unexpected error',
        };
      }
    };
    fetchData();
  }, [setQuote]);

  return (
    <div>Quotes</div>
  );
};

export default Quotes;
