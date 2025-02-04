import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Experience = ({ data, handleDelete }) => {
  return (
    <div>
      {data.fields.map((item, index) => (
        <Input key={index} type={item.type} placeholder={item.title} />
      ))}
      <Button text="Delete" handleClick={() => handleDelete(data.id)} />
    </div>
  );
};

export default Experience;



