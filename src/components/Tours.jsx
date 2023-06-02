import React from 'react';
import Tour from './Tour';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './Loading';
const url = 'https://course-api.com/react-tours-project';

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setTours(result);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // the second argument will prevent us from an infinate loop of refetching data. if we enter that loop the API will prevent us from reaccessing for 15 minutes
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </main>
    );
  }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <div className="title">
      <h2>Our Tours</h2>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
