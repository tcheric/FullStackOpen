import React from 'react'

const LabelInput = ({ text, state, handleStateChange}) => {
  return (
    <>
      <span>{text}: </span>
      <input 
        value={state}
        onChange={(e) => handleStateChange(e.target.value, text)}
      />
    </>
  )
}

export default LabelInput