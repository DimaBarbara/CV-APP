import React from 'react'
import uniqid from 'uniqid'

export default function Input({
  id = uniqid(),
  placeholder,
  type,
  onChange,
  value,
  name,
 
}) {
  
    return (
        <input
             id={id}
  type={type}
  value={value}
  onChange={onChange}
        placeholder={placeholder}
        name={name}
        ></input>
        
 )};