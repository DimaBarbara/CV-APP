import React from "react";
import s from "../CardHeader/CardHeader.module.css";

const CardHeader = ({ formData }) => {
  return (
    <div className={s.div}>
      <h2>
        {formData.firstName.length > 0
          ? `${formData.firstName} ${formData.lastName}`
          : "Name"}
      </h2>
      <h3>{formData.title.length ? formData.title : "Title"}</h3>
    </div>
  );
};

export default CardHeader;
