import React from 'react'

const Filter = ({ filter, handleStateChange }) => {
  return (
    <>
      <span>filter shown with: </span>
      <input 
        value={filter}
        onChange={(e) => handleStateChange(e.target.value)}
      />
    </>
  )
}

export default Filter