import React from "react";
import s from "../CardExperience/CardExperience.module.css";

const CardExperience = ({ dataExp }) => {
  return (
    <div className={s.div}>
      {dataExp.map((item, index) => (
        <div key={index} className={s.card}>
          <p>
            {item.from} - {item.to}
          </p>
          <div>
            <p>{item.position}</p>
            {item.company && (
              <p>{`${item.company}${item.city ? `, ${item.city}` : ""}`}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardExperience;
