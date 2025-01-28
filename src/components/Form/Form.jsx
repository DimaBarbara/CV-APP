import React from 'react'
import Input from '../Input/Input'
import Fieldset from '../Fieldset/Fieldset'
import Button from '../Button/Button'
import Experiense from '../Experience/Experiense'

const Form = ({handleAdd, showExp}) => {

  return (
    <form>
      <Fieldset title='Personal information'>
      <Input type='text' placeholder='First name' />
      <Input type='text' placeholder='Last name' />
      <Input type='text' placeholder='Title' />
      <Input type='url' placeholder='Your photo (url)' />
      <Input type='text' placeholder='Address' />
      <Input type='tel' placeholder='Phone number'/>
      <Input type='email' placeholder='Email'/>
      <Input type='text' placeholder='Description' />
      </Fieldset>
      <Fieldset title='Experiense'>
        {<div>{showExp.map((item, index) => (
          <Input key={index} type={item.type} placeholder={item.title} />
        ))}
          <Button handleClick={handleAdd} text="Add" />
        </div>}
         <Button handleClick={handleAdd} text="Add" />
      </Fieldset>
      <Fieldset title='Education'>
        
      </Fieldset>
    </form>
  )
}

export default Form