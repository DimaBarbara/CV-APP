import React from 'react'
import { useState } from 'react'
import uniqid from 'uniqid'

export default function Input({
  id = uniqid(),
  placeholder,
  type,
 
}) {
    const [inputValue, setInputValue] = useState('');
     const handleChange = (e) => {
    setInputValue(e.target.value);
  };
    return (
        <input
             id={id}
  type={type}
  value={inputValue}
  onChange={handleChange}
  placeholder={placeholder}
        ></input>
        
 )
}