import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import s from "../Experience/Experience.module.css"

const Experience = ({ data, handleDelete, onChange, formData }) => {
  console.log(`form data: ${formData}`);
  
  return (
    <div className={s.div}>
      {data.fields.map((item, index) => (
        <Input key={index} type={item.type} placeholder={item.title} name={item.name} value={formData[item.name]} onChange={onChange} />
      ))}
      <Button text="Delete" handleClick={() => handleDelete(data.id)} />
    </div>
  );
};

export default Experience;



