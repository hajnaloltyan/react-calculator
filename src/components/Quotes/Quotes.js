import React, { useState, useEffect } from 'react';
import env from 'react-dotenv';
import './Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [haveError, setHaveError] = useState(false);

  useEffect(() => {
    const delay = 3000;

    const fetchData = () => fetch('https://api.api-ninjas.com/v1/quotes?category=failure&limit=2', {
      method: 'GET',
      headers: { 'X-Api-Key': env.NINJA_KEY },
      contentType: 'application/json',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const quotesWithIds = data.map((quote, index) => ({
          ...quote,
          id: index + 1,
        }));
        setQuote(quotesWithIds);
      })
      .catch((error) => {
        setHaveError(true);
        throw error;
      });

    const timeout = setTimeout(() => {
      fetchData()
        .then(() => {
          setIsLoading(false);
        });
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <article className="quotesContainer">
      <h2>Today&apos;s Quotes:</h2>
      {isLoading && (
        <div className="loadingContainer">
          <div className="loading" />
        </div>
      )}

      {haveError && (
        <h3>
          Something went wrong :(
        </h3>
      )}

      {(!isLoading && !haveError) && (
        quote.map((item) => (
          <div key={item.id} className="quoteItem">
            <p>
              {`"${item.quote}"`}
            </p>
            <h4 className="author">{item.author}</h4>
          </div>
        )))}
    </article>
  );
};

export default Quotes;
