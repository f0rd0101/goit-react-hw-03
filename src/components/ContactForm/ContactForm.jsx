import s from '../ContactForm/ContactForm.module.css'
import react from 'react'

const ContactForm = () => {
  return (
    <div className={s.divcontactform}>
      <form  className={s.contact_forms}>
        <label>
            <span>Name</span>
            <input type="text" />
        </label>
        <label>
          <span>Number</span>
          <input type="number"/>
        </label>

      </form>
      <button className={s.contactformbutton} type='submit'>Add Contact</button>
    </div>
  )
}

export default ContactForm
