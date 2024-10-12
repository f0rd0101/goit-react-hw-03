import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useEffect, useState } from 'react'
import './App.css'


function App() {
  return(
    <div>
    <ContactForm/>
    <SearchBox/>
    <ContactList/>

   </div>
  )

 
}

export default App
