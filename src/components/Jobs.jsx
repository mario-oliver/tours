import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import JobInfo from './JobInfo';
import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const Jobs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currJob, setCurrJob] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <BtnContainer
        jobs={jobs}
        currJob={currJob}
        setCurrJob={setCurrJob}
      ></BtnContainer>
      <JobInfo jobs={jobs} currJob={currJob}></JobInfo>
    </section>
  );
};

export default Jobs;
