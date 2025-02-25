import React from 'react'
import s from '../ContactForm/ContactForm.module.css'
const ContactForm = () => {
  return (
    <div className={s.form_container}>
        <form>
          <label>Name</label>
          <input type="text" />
          <br/>
          <label>Number</label>
          <input type="text" />
          <div className={s.form_button}>
          <button  type='button'>Add contact</button>
          </div>
        </form>
    </div>
  )
}

export default ContactForm