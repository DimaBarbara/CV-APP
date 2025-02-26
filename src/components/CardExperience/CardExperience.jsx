import React from "react";
import s from "../CardExperience/CardExperience.module.css";

const CardExperience = ({ formData }) => {
  return (
    <div className={s.div}>
      <p>
        {formData.fromExp} - {formData.toExp}
      </p>
      <div>
        <p>{formData.position}</p>
        <p>
          {" "}
          {formData.company.length > 0
            ? `${formData.company}, ${formData.city}`
            : ""}
        </p>
      </div>
    </div>
  );
};

export default CardExperience;
