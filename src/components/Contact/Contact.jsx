import React from 'react'

const Contact = ({name,id,number}) => {
  return (
    <>
    <h2>{name}</h2>
    <p>{number}</p>
    </>
  )
}

export default Contact