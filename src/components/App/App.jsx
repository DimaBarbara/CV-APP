import React from 'react'
import Header from '../Header/Header'
import Form from '../Form/Form'
import { useState } from 'react'
import Experiense from '../Experience/Experiense'
import { experienceData } from '../../utils/constant';



const App = () => {
 const [showExp, setShowExp] = useState([]);
  
  const handleAdd = () => {
    setShowExp((prevExp) => [
      ...prevExp,
      ...experienceData,
    ]);
    
  }
  
  
  





  return (
    <div>
      <Header />
      <Form  handleAdd={handleAdd} showExp={showExp} />
    </div>
  )
}

export default App