import React from 'react'
// import Button from '../Button/Button'
import classes from './Blue.module.css'
import Logo5 from '../../Assests/blueePhoto.png'

const BlueCard = () => {
  return (
    <div className={classes.blue}>
        <h4>The workplace for remote contracts gigs.</h4>
        <p>For Choosing the best way of Contract</p>
        <form className={classes.form}>
        <input 
        type="text"
        placeholder='Enter Email Address'/>
        {/* <div className={classes.up}>
        <Button name="Get Started"/>
        </div> */}
      </form>
      <div className={classes.bluephoto}>
        <img src={Logo5} alt="pic"/>
      </div>
    </div>
  )
}

export default BlueCard
