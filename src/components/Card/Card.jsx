import React from 'react'
import CardHeader from '../CardHeader/CardHeader'
import CardMain from '../Cardmain/CardMain'
import CardAside from '../CardAside/CardAside'

const Card = ({formData}) => {
  return (
      <div>
          <CardHeader formData={formData} />
          <CardAside/>
          <CardMain formData={formData}/>
    </div>
  )
}

export default Card