import React, { useState } from "react"; 
import s from "../ContactForm/ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number) return;

    addContact(name, number);
    setName(""); 
    setNumber("");
  };

  return (
    <div className={s.form_container}>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <br />
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <br/>
        <label>Number</label>
        <br />
        <input 
          type="text" 
          value={number} 
          onChange={(e) => setNumber(e.target.value)} 
        />
        <div className={s.form_button}>
          <button type="submit">Add contact</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
