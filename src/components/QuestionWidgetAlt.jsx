import React from 'react';
import { useState } from 'react';
import { Question, QuestionAlt } from './Question';
import questionsData from '../data/faq_data';

const QuestionWidget = () => {
  const [questions, setQuestions] = useState(questionsData);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = id === activeIndex ? null : id;
    setActiveIndex(newActiveId);
  };

  return (
    <section className="container-question">
      <h1>Question and Answers</h1>
      <p>One answer at a time</p>
      {questions.map((question) => {
        return (
          <QuestionAlt
            key={question.id}
            {...question}
            toggleQuestion={toggleQuestion}
            activeIndex={activeIndex}
          ></QuestionAlt>
        );
      })}
    </section>
  );
};

export default QuestionWidget;
