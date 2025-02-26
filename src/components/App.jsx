import React, { useState, useRef } from "react";
import Header from "./Header/Header";
import Form from "./Form/Form";
import { experienceData } from "../utils/constant";
import { educationData } from "../utils/constant";
import { nanoid } from "nanoid";
import Card from "./Card/Card";
import { useReactToPrint } from "react-to-print";
import Footer from "./Footer/Footer";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    address: "",
    phone: "",
    email: "",
    description: "",
    position: "",
    company: "",
    city: "",
    fromExp: "",
    toExp: "",
    university: "",
    cityEdu: "",
    degree: "",
    subject: "",
    fromEdu: "",
    toEdu: "",
  });
  const cardRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => cardRef.current,
  });
  console.log(cardRef.current);

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
      id: nanoid(),
      fields: experienceData,
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
      fieldsEdu: educationData,
    };
    setShowEdu((prevEdu) => [...prevEdu, newEducation]);
  };
  const handleDeleteEdu = (eduId) => {
    setShowEdu((prevEdu) => prevEdu.filter((edu) => edu.id !== eduId));
  };

  function handleResetForm() {
    if (formData && typeof formData === "object") {
      const resetData = Object.keys(formData).reduce((acc, key) => {
        acc[key] = "";
        return acc;
      }, {});
      setFormData(resetData);
    }
    setShowEdu([]);
    setShowExp([]);
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
        formData={formData}
        handlePrint={handlePrint}
        handleResetForm={handleResetForm}
      />
      <div ref={cardRef}>
        <Card formData={formData} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
