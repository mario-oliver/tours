import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ info, title }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

const QuestionAlt = ({ id, info, title, toggleQuestion, activeIndex }) => {
  const isActive = id === activeIndex;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            toggleQuestion(id);
          }}
        >
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
};

export { Question, QuestionAlt };
