import React from 'react'
import Input from '../Input/Input'
import Fieldset from '../Fieldset/Fieldset'
import Button from '../Button/Button'
import EducationList from '../EducationList/EducationList'
import ExperienceList from '../ExperienceList/ExperienceList'
import s from '../Form/Form.module.css'

const Form = ({handleAdd, showExp, handleDelete, handleDeleteEdu, handleAddEdu, showEdu, handleInputChange, formData, handlePrint, handleResetForm}) => {

  return (
    <form className={s.form}>
      <Fieldset title='Personal information'>
      <Input type="text" name="firstName" placeholder="First name" value={formData.firstName} onChange={handleInputChange} />
        <Input type="text" name="lastName" placeholder="Last name" value={formData.lastName} onChange={handleInputChange} />
        <Input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleInputChange} />
        <Input type="url" name="photo" placeholder="Your photo (url)" value={formData.photo} onChange={handleInputChange} />
        <Input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
        <Input type="tel" name="phone" placeholder="Phone number" value={formData.phone} onChange={handleInputChange} />
        <Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
        <Input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} />
      </Fieldset>
      <Fieldset title='Experience'>
        <ExperienceList experienceList={showExp} handleDelete ={handleDelete} onChange={handleInputChange} formData={formData} />
         <Button handleClick={handleAdd} text="Add" />
      </Fieldset>
      <Fieldset title='Education'>
        <EducationList educationList={showEdu} handleDeleteEdu ={handleDeleteEdu} onChange={handleInputChange} formData={formData}/>
         <Button handleClick={handleAddEdu} text="Add" />
      </Fieldset>
      <Fieldset>
        <Button handleClick={handleResetForm} text='Reset Form' style={{ backgroundColor: 'red' }} />
        <Button handleClick={handlePrint} text='Generate PDF'/>
      </Fieldset>
    </form>
  )
}

export default Form