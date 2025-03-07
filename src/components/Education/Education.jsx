import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import s from "../Education/Education.module.css";

const Education = ({ data, handleDeleteEdu, handleChangeEdu }) => {
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
              onChange={(e) => handleChangeEdu(data.id, field, e.target.value)}
            />
          );
        }
        return null;
      })}
      <Button text="Delete" handleClick={() => handleDeleteEdu(data.id)} />
    </div>
  );
};

export default Education;
