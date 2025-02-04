import React from 'react';
import Education from '../Education/Education';

const EducationList = ({ educationList, handleDeleteEdu }) => {
  return (
    <ul>
      {educationList.map((edu) => (
        <li key={edu.id}>
          <Education data={edu} handleDeleteEdu={handleDeleteEdu} />
        </li>
      ))}
    </ul>
  );
};

export default EducationList;
