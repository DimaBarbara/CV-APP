import React from 'react'
import uniqid from 'uniqid'
import s from '../Input/Input.module.css'

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
        className={s.input}
        ></input>
        
 )};