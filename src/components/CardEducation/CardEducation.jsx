import React from "react";
import s from "../CardEducation/CardEducation.module.css";

const CardEducation = ({ dataEdu }) => {
  return (
    <div className={s.container}>
      {dataEdu.map((item, index) => (
        <div key={index} className={s.card}>
          <p className={s.p}>
            {item.from} - {item.to}
          </p>
          <div>
            <p className={s.p}>
              {item.university.length > 0
                ? `${item.university}, ${item.city}`
                : ""}
            </p>
            <p className={s.p}>
              {item.degree.length > 0 ? `Degree: ${item.degree}` : ""}
            </p>
            <p className={s.p}>
              {item.subject.length > 0 ? `Subject: ${item.subject}` : ""}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardEducation;
