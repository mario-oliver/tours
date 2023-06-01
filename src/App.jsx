import { useEffect } from 'react';
import { useState } from 'react';
import Tours from './components/Tours';
import Loading from './components/Loading';
import Review from './components/Review';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const result = await response.json();
        setTours(result);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  // the second argument will prevent us from an infinate loop of refetching data. if we enter that loop the API will prevent us from reaccessing for 15 minutes
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading></Loading>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>No Tours Left</h2>
        <button className="btn" onClick={fetchTours}>
          Refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}></Tours>
      <Review></Review>
    </main>
  );
};
export default App;
