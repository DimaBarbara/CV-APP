import React, { useState, useRef } from "react";
import Header from "../Header/Header";
import Form from "../Form/Form";
import { experienceData } from "../../utils/constant";
import { educationData } from "../../utils/constant";
import { nanoid } from "nanoid";
import Card from "../Card/Card";
import { useReactToPrint } from "react-to-print";
import Footer from "../Footer/Footer";
import s from "./App.module.css";

const App = () => {
  // Form main
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    title: "",
    photo: "",
    address: "",
    phone: "",
    email: "",
    description: "",
    university: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Print button
  const cardRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: cardRef,
  });

  // Experience
  const [showExp, setShowExp] = useState([]);

  const handleAddExp = () => {
    setShowExp([
      ...showExp,
      {
        id: nanoid(),
        position: "",
        company: "",
        city: "",
        from: "",
        to: "",
      },
    ]);
  };
  const handleChangeExp = (id, field, value) => {
    setShowExp(
      showExp.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
    );
  };

  const handleDeleteExp = (id) => {
    setShowExp(showExp.filter((exp) => exp.id !== id));
  };
  // Education
  const [showEdu, setShowEdu] = useState([]);

  const handleAddEdu = () => {
    setShowEdu([
      ...showEdu,
      {
        id: nanoid(),
        university: "",
        city: "",
        degree: "",
        subject: "",
        from: "",
        to: "",
      },
    ]);
  };
  const handleChangeEdu = (id, field, value) => {
    setShowEdu(
      showEdu.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
    );
  };

  const handleDeleteEdu = (id) => {
    setShowEdu(showEdu.filter((edu) => edu.id !== id));
  };
  // Reset Form Button
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
    <div className={s.mainDiv}>
      <Header />
      <Form
        // Education
        showEdu={showEdu}
        handleDeleteEdu={handleDeleteEdu}
        handleAddEdu={handleAddEdu}
        handleChangeEdu={handleChangeEdu}
        // Experience
        showExp={showExp}
        handleDeleteExp={handleDeleteExp}
        handleAddExp={handleAddExp}
        handleChangeExp={handleChangeExp}
        // Form main
        formData={formData}
        handleInputChange={handleInputChange}
        // Buttons
        handlePrint={handlePrint}
        handleResetForm={handleResetForm}
      />
      <div ref={cardRef}>
        <Card formData={formData} dataExp={showExp} dataEdu={showEdu} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
