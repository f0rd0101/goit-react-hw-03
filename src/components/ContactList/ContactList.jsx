import React from 'react'
import s from '../ContactList/ContactList.module.css'
import Contact from '../Contact/Contact'
const ContactList = ({people}) => {
  return (
    <div className={s.contact_list_div}>
      <ul>
        
        {
         people.map((person)=>{
          return <li className={s.person_item} key = {person.id}> <Contact name ={person.name} number ={person.number}/> </li>
          
      
         })

        }
      
      </ul>
    </div>
  )
}

export default ContactList