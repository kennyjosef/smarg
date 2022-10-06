import React from 'react'
import classes from './Help.module.css'

const Help = (props) => {
  return (
    <div className={classes.help}>
      <div className={classes.item1}>
        <p>{props.one}</p>
        <h3>{props.two}</h3>
      </div>
      <div className={classes.item2}>
        <p>{props.three}</p>

      </div>
    </div>
  )
}

export default Help
