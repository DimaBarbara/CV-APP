import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import { experienceData } from '../../utils/constant'

const Experiense = () => {
  return (
      <div>
          {experienceData.map((item, index) => (<Input key={index} type={item.type} placeholder={item.title} />))}
          <Button  text="Delete All" />
    </div>
  )
}

export default Experiense