import React from 'react';
import Experience from '../Experience/Experience';

const ExperienceList = ({ experienceList, handleDelete }) => {
  return (
    <ul>
      {experienceList.map((exp) => (
        <li key={exp.id}>
          <Experience data={exp} handleDelete={handleDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
