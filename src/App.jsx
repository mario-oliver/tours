import { useEffect } from 'react';
import { useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
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

  return (
    <main>
      <Tours tours={tours}></Tours>
    </main>
  );
};
export default App;
