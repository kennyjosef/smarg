import React from 'react'
import classes from  './Cards.module.css'
const Cards = (props) => {
  return (
    <div className={classes.card}>
      <img src={props.img} alt='pic'/>
      <h3>{props.topic}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default Cards
