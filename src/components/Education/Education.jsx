import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import s from "../Education/Education.module.css"

const Education= ({ data, handleDeleteEdu, formData, onChange  }) => {
  return (
    <div className={s.div}>
      {data.fieldsEdu.map((item, index) => (
        <Input key={index} type={item.type} placeholder={item.title} name={item.name} value={formData[item.name]} onChange={onChange} />
      ))}
      <Button text="Delete" handleClick={() => handleDeleteEdu(data.id)} />
    </div>
  );
};

export default Education;
