import React from 'react'
import Button from '../Button/Button'
import classes from './Solution.module.css'
import Logo7 from '../../Assests/emojiA.png'
import Logo8 from '../../Assests/emojiB.png'
import SoluButton from '../SoluButton/SoluButton'
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
                <div className={classes.content2}>
                    <div className={classes.twocards}>
                    <div className={classes.two}>
                        <div className={classes.twoOne}>
                            <img src={Logo7} alt="pic"/>
                            <p>Akintola request  to  <span>cancel</span> this contract</p>
                        </div>
                        <div className={classes.twoOne}>
                            <SoluButton name="View Request"/>
                            <p>Mar 25, 2010</p>
                        </div>
                    </div>
                    <div className={classes.two}>
                        <div className={classes.twoTwo} >
                            <img src={Logo8} alt="pic"/>
                            <p>You rejected Akintola’s cancellation request to this contract</p>
                        </div>
                        <div className={classes.twoTwoBtn}>
                            <SoluButton name="Escalate Request"/>
                        </div>
                    </div>
                    </div>
                    <div className={classes.move}></div>
                </div>
            </div>
            <div className={classes.tanks}>
                <div className={classes.content2}>
                    <div className={classes.twocards}>
                    <div className={classes.two}>
                        <div className={classes.twoOne}>
                            <img src={Logo7} alt="pic"/>
                            <p>Akintola request  to  <span>cancel</span> this contract</p>
                        </div>
                        <div className={classes.twoOne}>
                            <SoluButton name="View Request"/>
                            <p>Mar 25, 2010</p>
                        </div>
                    </div>
                    <div className={classes.two}>
                        <div className={classes.twoTwo}>
                            <img src={Logo8} alt="pic"/>
                            <p>You rejected Akintola’s cancellation request to this contract</p>
                        </div>
                        <div className={classes.twoTwoBtn}>
                            <SoluButton name="Escalate Request"/>
                        </div>
                    </div>
                    </div>
                    <div className={classes.move}></div>
                </div>
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
                <div className={classes.content2}>
                    <div className={classes.twocards}>
                    <div className={classes.two}></div>
                    <div className={classes.two}></div>
                    </div>
                    <div className={classes.move}></div>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Solution
