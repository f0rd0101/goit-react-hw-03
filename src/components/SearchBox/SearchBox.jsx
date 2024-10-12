import React from 'react'
import s from '../SearchBox/SearchBox.module.css'

const SearchBox = () => {
  return (
    <div>
      <h4 className={s.mainSearchBoxTile}>Find contacts by name</h4>
      <form>
        <label>
          <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default SearchBox
