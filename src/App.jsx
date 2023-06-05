import Tours from './components/Tours';
import Review from './components/Review';
import QuestionWidget from './components/QuestionWidget';
import QuestionWidgetAlt from './components/QuestionWidgetAlt';
import { useState } from 'react';
import MenuWidget from './components/MenuWidget';
import Jobs from './components/Jobs';

const App = () => {
  const [showAlternativeQs, setShowAlternativeQs] = useState(false);

  return (
    <main>
      <Jobs></Jobs>
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
      <MenuWidget></MenuWidget>
    </main>
  );
};
export default App;
