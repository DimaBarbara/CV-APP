import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import s from "../Experience/Experience.module.css";

const Experience = ({ data, handleDeleteExp, handleChangeExp }) => {
  return (
    <div className={s.div}>
      {Object.keys(data).map((field) => {
        if (field !== "id") {
          return (
            <Input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              name={field}
              value={data[field]}
              onChange={(e) => handleChangeExp(data.id, field, e.target.value)}
            />
          );
        }
        return null;
      })}
      <Button text="Delete" handleClick={() => handleDeleteExp(data.id)} />
    </div>
  );
};

export default Experience;
