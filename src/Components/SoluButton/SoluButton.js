import React from 'react'
import './SoluButton.css'

const SoluButton = (props) => {
  return (
    <div>
      <button className='solu'>{props.name}</button>
    </div>
  )
}

export default SoluButton
