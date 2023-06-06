import React, { useState } from 'react';
import { longList, shortList, list } from '../data/carousel_data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(longList);
  const [currPersonIndex, setCurrPersonIndex] = useState(1);

  const prevSlide = () => {
    setCurrPersonIndex((oldIndex) => {
      const result = (oldIndex - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrPersonIndex((oldIndex) => {
      const result = (oldIndex + 1) % people.length;
      return result;
    });
  };

  return (
    <section className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (index - currPersonIndex)}%)`,
              opacity: currPersonIndex === index ? 1 : 0,
              visibility: currPersonIndex === index ? 'visible ' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className="carousel-person-img" />
            <h5 className="carousel-name">{name}</h5>
            <p className="carousel-title">{title}</p>
            <p className="carousel-text">{quote}</p>
            <FaQuoteRight className="carousel-icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
