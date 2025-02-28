import React, { useState } from 'react'
import s from '../SearchBox/SearchBox.module.css'

const SearchBox = ({ handleSearch }) => {
  const [filteredSearch, setFilteredSearch] = useState("")

  const handleChange = (e) => {
    const searchQuery = e.target.value
    setFilteredSearch(searchQuery)
    handleSearch(searchQuery)  
  }

  return (
    <div className={s.search_div}>
      <form>
        <label>Find contacts by name</label>
        <br />
        <input 
          type="text" 
          value={filteredSearch}  
          onChange={handleChange} 
        />
      </form>
    </div>
  )
}

export default SearchBox
