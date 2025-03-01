import React, { useState } from "react"; 
import s from "../ContactForm/ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';

import * as Yup from "yup";

const validationRules = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  return (
    <div className={s.form_container}>
      <Formik
        initialValues={{
          name: "",
          phone: "",
        }}
        validationSchema={validationRules}
        onSubmit={(values, { resetForm }) => {
          addContact(values.name, values.phone);
          resetForm(); 
        }}
      >
        <Form>
          <label htmlFor={nameFieldId}>Name</label>
          <br />
          <Field
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage name="name" component="div" className={s.error} />
          <br />
          <label htmlFor={phoneFieldId}>Number</label>
          <br />
          <Field
            type="text"
            name="phone"
            id={phoneFieldId}
          />
          <ErrorMessage name="phone" component="div" className={s.error} />
          <div className={s.form_button}>
            <button type="submit">Add contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
