import React from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import reviews from '../reviews_data';
import { useState } from 'react';

const Review = () => {
  const [reviewsIndex, setReviewsIndex] = useState(0);

  const { id, image, job, name, text } = reviews[reviewsIndex];

  const nextReview = () => {
    setReviewsIndex((curr) => {
      const nextIndex = curr + 1;
      if (nextIndex > reviews.length - 1) return 0;
      return nextIndex;
    });
  };
  const prevReview = () => {
    setReviewsIndex((curr) => {
      const nextIndex = curr - 1;
      if (nextIndex < 0) return reviews.length - 1;
      return nextIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    while (randomNumber === reviewsIndex) {
      randomNumber = Math.floor(Math.random() * reviews.length);
    }
    setReviewsIndex(randomNumber);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"></img>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevReview}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextReview}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Surpise Me
        </button>
      </article>
    </main>
  );
};

export default Review;
