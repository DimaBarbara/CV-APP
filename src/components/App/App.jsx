import React, { useState } from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import { experienceData } from '../../utils/constant';
import { educationData } from '../../utils/constant';
import { nanoid } from 'nanoid';
import Card from '../Card/Card';

const App = () => {
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    photo: '',
    address: '',
    phone: '',
    email: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [showExp, setShowExp] = useState([]);

    const handleAdd = () => {
    const newExperience = {
      id:nanoid(), 
      fields: experienceData
    };
    setShowExp((prevExp) => [...prevExp, newExperience]);
  };

  const handleDelete = (expId) => {
    setShowExp((prevExp) => prevExp.filter((exp) => exp.id !== expId));
  };

  const [showEdu, setShowEdu] = useState([]);

  const handleAddEdu = () => {
    const newEducation = {
      id: nanoid(),
      fieldsEdu: educationData
    };
    setShowEdu((prevEdu) => [...prevEdu, newEducation])
  }
  const handleDeleteEdu = (eduId) => {
    setShowEdu((prevEdu) => prevEdu.filter((edu) => edu.id !== eduId))
  }  
  return (
    <div>
      <Header />
      <Form
        showEdu={showEdu}
        handleDeleteEdu={handleDeleteEdu}
        handleAddEdu={handleAddEdu}
        handleDelete={handleDelete}
        handleAdd={handleAdd}
        showExp={showExp}
        handleInputChange={handleInputChange}
      formData={formData}/>
      
      <Card  formData={formData} />
      
    </div>
  );
};

export default App;
