import React from 'react'
import Button from '../Button/Button'
import classes from './Solution.module.css'
// import  './Solution.css'

const Solution = () => {
  return (
    <div className={classes.solution}>
        <div className={classes.container}>
        <div className={classes.item1}>
            <h3>Best Solutions & Values for your Work</h3>
            <p>The status of a client or freelancer is based on who created</p>
        </div>
        <div className={classes.item2}>
            <div className={classes.tank}>
                <div className={classes.content}>
                    <p className={classes.digi}>Helping digital</p>
                    <h3 className={classes.great}>With Clear agreements.</h3>
                    <p className={classes.sta}> No unclear, un-ending, and un-defined work or task, know exactly what’s expected.</p>
                    <Button name="Get Started"/>
                </div>
                <div className={classes.content2}></div>
            </div>
            <div className={classes.tanks}>
                <div className={classes.content2}></div>
                <div className={classes.content}>
                    <p className={classes.digi}>Helping digital</p>
                    <h3 className={classes.great}>Track work progress and velocity.</h3>
                    <p className={classes.sta}> No unclear, un-ending, and un-defined work or task, know exactly what’s expected.</p>
                    <Button name="Get Started"/>

                </div>
            </div>
            <div className={classes.tank}>
                <div className={classes.content}>
                    <p className={classes.digi}>Helping digital</p>
                    <h3 className={classes.great}>Clients and freelancers money secured.</h3>
                    <p className={classes.sta}> Before work starts, payment is made into the contract. Money is only released when work has been done and approved.</p>
                    <Button name="Get Started"/>

                </div>
                <div className={classes.content2}></div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Solution
