import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(true);

  // the second argument will prevent us from an infinate loop of refetching data. if we enter that loop the API will prevent us from reaccessing for 15 minutes
  useEffect(() => {}, []);

  return <h2>Tours Starter</h2>;
};
export default App;
