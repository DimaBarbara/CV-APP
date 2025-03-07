import React from "react";
import s from "../CardAside/CardAside.module.css";

const CardAside = ({ formData }) => {
  console.log(formData);

  return (
    <div className={s.div}>
      <img
        className={s.img}
        src={
          formData.photo.length > 0
            ? formData.photo
            : "https://lively-begonia-680727.netlify.app/assets/avatar-placeholder-c2326214.png"
        }
        alt="UserPhoto"
      />
      <h3 className={s.h3}>Personal Details</h3>
      <div>
        <h4 className={s.h4}>
          Address
          <p className={s.p}>{`${formData.address}`} </p>
        </h4>
        <h4 className={s.h4}>
          Phone number
          <p className={s.p}>{`${formData.phone}`} </p>
        </h4>
        <h4 className={s.h4}>
          Email
          <p className={s.p}>{`${formData.email}`} </p>
        </h4>
      </div>
    </div>
  );
};

export default CardAside;
