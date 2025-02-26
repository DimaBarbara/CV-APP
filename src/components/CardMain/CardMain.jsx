import React, { useState } from "react";
import CardExperience from "../CardExperience/CardExperience";
import s from "../CardMain/CardMain.module.css";

const CardMain = ({ formData }) => {
  return (
    <div className={s.div}>
      <div>
        <h3 className={s.h3}>Description</h3>
        <div className={s.p}>{formData.description}</div>
      </div>
      <div>
        <h3 className={s.h3}>Experience</h3>
        <div>
          <CardExperience formData={formData} />
        </div>
      </div>
      <div>
        <h3 className={s.h3}>Education</h3>
        <div>
          <p className={s.p}>
            {formData.fromEdu} - {formData.toEdu}
          </p>
          <div>
            <p className={s.p}>
              {formData.university.length > 0
                ? `${formData.university}, ${formData.cityEdu}`
                : ""}{" "}
            </p>
            <p className={s.p}>
              {formData.degree.length > 0 ? `Degree:${formData.degree}` : ""}
            </p>
            <p className={s.p}>
              {formData.subject.length > 0 ? `Subject:${formData.subject}` : ""}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMain;
