import React from 'react';
import { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  let { id, image, info, name, price } = tour;
  let [readMore, isReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img"></img>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 180)}...`}{' '}
          <button
            type="button"
            className="info-btn"
            onClick={() => isReadMore(!readMore)}
          >
            {!readMore ? 'Read More' : 'Read Less'}
          </button>
        </p>

        <button
          type="button"
          className="btn btn-block btn-delete"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
