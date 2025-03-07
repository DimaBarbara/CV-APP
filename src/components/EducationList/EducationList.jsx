import React from "react";
import Education from "../Education/Education";

const EducationList = ({ showEdu, handleDeleteEdu, handleChangeEdu }) => {
  return (
    <ul>
      {showEdu.map((edu) => (
        <li key={edu.id}>
          <Education
            data={edu}
            handleDeleteEdu={handleDeleteEdu}
            handleChangeEdu={handleChangeEdu}
          />
        </li>
      ))}
    </ul>
  );
};

export default EducationList;
