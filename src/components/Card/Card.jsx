import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import CardMain from "../CardMain/CardMain";
import CardAside from "../CardAside/CardAside";
import s from "../Card/Card.module.css";

const Card = ({ formData, dataExp, dataEdu }) => {
  return (
    <div className={s.div}>
      <CardHeader formData={formData} />
      <div className={s.divMain}>
        <CardMain formData={formData} dataExp={dataExp} dataEdu={dataEdu} />
        <CardAside formData={formData} />
      </div>
    </div>
  );
};

export default Card;
