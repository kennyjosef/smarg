import React from 'react'
import './Hero.css'

const Hero = (props) => {
  return (
    <div className='container'>
      <p className='hero-text'>{props.first}</p>
      <h1 className='text'>{props.second}</h1>
      <p className='last'>{props.third}</p>  
    </div>
  )
}

export default Hero
