import React from 'react';
import Education from '../Education/Education';

const EducationList = ({ educationList, handleDeleteEdu, formData, onChange }) => {
  return (
    <ul>
      {educationList.map((edu) => (
        <li key={edu.id}>
          <Education data={edu} handleDeleteEdu={handleDeleteEdu} onChange={onChange} formData={formData} />
        </li>
      ))}
    </ul>
  );
};

export default EducationList;
