import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const Education= ({ data, handleDeleteEdu  }) => {
  return (
    <div>
      {data.fieldsEdu.map((item, index) => (
        <Input key={index} type={item.type} placeholder={item.title} />
      ))}
      <Button text="Delete" handleClick={() => handleDeleteEdu(data.id)} />
    </div>
  );
};

export default Education;
