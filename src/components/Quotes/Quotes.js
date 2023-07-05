import React, { useState, useEffect } from 'react';
import 'dotenv/config';
import './Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://api.api-ninjas.com/v1/quotes?category=failure&limit=2', {
          method: 'GET',
          headers: { 'X-Api-Key': process.env.REACT_APP_NINJA_KEY },
          contentType: 'application/json',
        });
        const data = await result.json();
        const quotesWithIds = data.map((quote, index) => ({
          ...quote,
          id: index + 1,
        }));
        return setQuote(quotesWithIds);
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
    <article className="quotesContainer">
      <h2>Today&apos;s Quotes:</h2>
      {quote.map((item) => (
        <div key={item.id} className="quoteItem">
          <p>
            {`"${item.quote}"`}
          </p>
          <h4 className="author">{item.author}</h4>
        </div>
      ))}
    </article>
  );
};

export default Quotes;
