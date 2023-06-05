import React from 'react';

const BtnContainer = ({ jobs, currJob, setCurrJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            className={index === currJob ? 'job-btn active-btn' : 'job-btn'}
            key={item.id}
            onClick={() => setCurrJob(index)}
          >
            {item.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
