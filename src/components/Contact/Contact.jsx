import React from 'react'
import s from '../Contact/Contact.module.css'
const Contact = ({name,number}) => {
  return (
    <>
    <div className={s.contacts_elem}>
    <h2>{name}</h2>
    <p>{number}</p>
    </div>
    <button type='button'>delete</button>
    </>
  )
}

export default Contact