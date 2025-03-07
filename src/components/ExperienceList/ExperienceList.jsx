import React from "react";
import Experience from "../Experience/Experience";

const ExperienceList = ({ handleChangeExp, handleDeleteExp, showExp }) => {
  return (
    <ul>
      {showExp.map((exp) => (
        <li key={exp.id}>
          <Experience
            data={exp}
            handleDeleteExp={handleDeleteExp}
            handleChangeExp={handleChangeExp}
          />
        </li>
      ))}
    </ul>
  );
};

export default ExperienceList;
