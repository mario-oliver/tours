import React from 'react';
import Tour from './Tour';

const Tours = ({ tours }) => {
  return (
    <div className="title">
      <h2>Our Tours</h2>
      <div className="title-underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} tour={tour} />;
        })}
      </div>
    </div>
  );
};

export default Tours;
