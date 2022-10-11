import React from 'react'
import './Caro.css'

const Caro = ({header, text}) => {
  return (
    <div className='caro'>
      <h4> {header}</h4>
      <p>{text}</p>
    </div>
  )
}

export default Caro
