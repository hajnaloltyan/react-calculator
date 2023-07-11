import React, { useState, useEffect } from 'react';
import './Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [haveError, setHaveError] = useState(false);

  useEffect(() => {
    const delay = 3000;

    const fetchData = () => fetch('https://api.api-ninjas.com/v1/quotes?category=computers&limit=2', {
      method: 'GET',
      headers: { 'X-Api-Key': process.env.REACT_APP_API_KEY },
      contentType: 'application/json',
    })
      .then((response) => {
        if (!response.ok) {
          setIsLoading(false);
          setHaveError(true);
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
    <section className="quotesContainer">
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
    </section>
  );
};

export default Quotes;
