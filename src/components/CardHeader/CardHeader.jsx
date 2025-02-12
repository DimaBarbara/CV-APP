import React from 'react'

const CardHeader = ({ formData }) => {
  console.log(formData);
  
  return (
        <div>
      <h2>
        {formData.firstName.length > 0 ? `${formData.firstName} ${formData.lastName}` : 'Name'}
      </h2>
      <h3>{formData.title.length ? formData.title : 'Title'}</h3>
    </div>
  )
}

export default CardHeader