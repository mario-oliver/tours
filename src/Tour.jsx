import React from 'react';

const Tour = ({ tour }) => {
  let { id, image, info, name, price } = tour;

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img"></img>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{info}</p>
      </div>
    </article>
  );
};

export default Tour;
