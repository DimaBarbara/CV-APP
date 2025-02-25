import React from 'react';
import Experience from '../Experience/Experience';

const ExperienceList = ({ experienceList, handleDelete, onChange, formData }) => {
  
  return (
    <ul>
      {experienceList.map((exp) => (
        <li key={exp.id}>
          <Experience data={exp} handleDelete={handleDelete} onChange={onChange} formData={formData} />
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
