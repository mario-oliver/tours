import React from 'react';
import { useState } from 'react';
import { Question, QuestionAlt } from './Question';
import questionsData from '../data/faq_data';

const QuestionWidget = () => {
  const [questions, setQuestions] = useState(questionsData);
  console.log(questions);

  return (
    <section className="container-question">
      <h1>Question and Answers</h1>
      <p>*Multiple answers at a time</p>
      {questions.map((question) => {
        return <Question key={question.id} {...question}></Question>;
      })}
    </section>
  );
};

export default QuestionWidget;
