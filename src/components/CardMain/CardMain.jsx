import React, { useState } from "react";
import CardExperience from "../CardExperience/CardExperience";
import s from "../CardMain/CardMain.module.css";
import CardEducation from "../CardEducation/CardEducation";

const CardMain = ({ formData, dataExp, dataEdu }) => {
  return (
    <div className={s.div}>
      <div className={s.divChild}>
        <h3 className={s.h3}>Description</h3>
        {formData.description.length > 0 ? (
          <div className={s.p}>{formData.description}</div>
        ) : (
          ""
        )}
      </div>
      <div className={s.divChild}>
        <h3 className={s.h3}>Experience</h3>
        <div>
          <CardExperience dataExp={dataExp} />
        </div>
      </div>
      <div className={s.divChild}>
        <h3 className={s.h3}>Education</h3>
        <div>
          <CardEducation dataEdu={dataEdu} />
        </div>
      </div>
    </div>
  );
};

export default CardMain;
