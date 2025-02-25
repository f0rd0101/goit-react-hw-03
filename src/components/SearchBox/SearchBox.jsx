import React from 'react'
import s from '../SearchBox/SearchBox.module.css'


const SearchBox = () => {
  return (
    <div className={s.search_div}>
    <form>
      <label>Find contacts by name</label>
      <br/>
      <input type="text" />
    </form>
    </div>
  )
}

export default SearchBox