import Tours from './components/Tours';
import Review from './components/Review';
import QuestionWidget from './components/QuestionWidget';
import QuestionWidgetAlt from './components/QuestionWidgetAlt';
import { useState } from 'react';

const App = () => {
  const [showAlternativeQs, setShowAlternativeQs] = useState(false);

  return (
    <main>
      <Tours></Tours>
      <Review></Review>
      <button
        className="alert-success btn"
        onClick={() => {
          setShowAlternativeQs(!showAlternativeQs);
        }}
      >
        <h2> Show Alternative Functionality for FAQs</h2>
      </button>
      {showAlternativeQs ? (
        <QuestionWidgetAlt />
      ) : (
        <QuestionWidget></QuestionWidget>
      )}
    </main>
  );
};
export default App;
