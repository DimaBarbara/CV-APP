import React from 'react'
import Input from '../Input/Input'
import Fieldset from '../Fieldset/Fieldset'
import Button from '../Button/Button'
import EducationList from '../EducationList/EducationList'
import ExperienceList from '../ExperienceList/ExperienceList'

const Form = ({handleAdd, showExp, handleDelete, handleDeleteEdu, handleAddEdu, showEdu}) => {

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
        <ExperienceList experienceList={showExp} handleDelete ={handleDelete} />
         <Button handleClick={handleAdd} text="Add" />
      </Fieldset>
      <Fieldset title='Education'>
        <EducationList educationList={showEdu} handleDeleteEdu ={handleDeleteEdu} />
         <Button handleClick={handleAddEdu} text="Add" />
      </Fieldset>
    </form>
  )
}

export default Form