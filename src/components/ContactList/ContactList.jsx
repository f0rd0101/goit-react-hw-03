import React from 'react'
import s from '../ContactList/ContactList.module.css'
import Contact from '../Contact/Contact'
const ContactList = ({people}) => {
  return (
    <div>
      <ul>
        {
         people.map((person)=>{
          return <Contact id = {person.id} name ={person.name} number ={person.number}/>
         })

        }
      </ul>
    </div>
  )
}

export default ContactList