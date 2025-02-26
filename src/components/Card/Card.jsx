import React from "react";
import CardHeader from "../CardHeader/CardHeader";
import CardMain from "../Cardmain/CardMain";
import CardAside from "../CardAside/CardAside";
import s from "../Card/Card.module.css";

const Card = ({ formData }) => {
  return (
    <div className={s.div}>
      <CardHeader formData={formData} />
      <div className={s.divMain}>
        <CardMain formData={formData} />
        <CardAside formData={formData} />
      </div>
    </div>
  );
};

export default Card;
