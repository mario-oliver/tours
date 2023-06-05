import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <div className="job-desc">
            <FaAngleDoubleRight></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Duties;
