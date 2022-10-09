import React from 'react'
import Button from '../Button/Button'
import classes from './Solution.module.css'
import Logo7 from '../../Assests/emojiA.png'
import Logo8 from '../../Assests/emojiB.png'
import Logo9 from '../../Assests/circle.png'
import Logo10 from '../../Assests/Vector.png'
import Logo11 from '../../Assests/triangle.png'
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
                    <div className={classes.move}>
                        <div className={classes.moveOne}>
                        <img src={Logo9} alt="pic"/>
                        <h2>133</h2>
                        </div>
                        <div  className={classes.moveTwo}>
                            <p>Ongoing Contract</p>
                            <img src={Logo10} alt="pic"/>
                        </div>
                    </div>
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
                    <div className={classes.move}>
                        <div className={classes.moveOne}>
                        <img src={Logo9} alt="pic"/>
                        <h2>133</h2>
                        </div>
                        <div  className={classes.moveTwo}>
                            <p>Ongoing Contract</p>
                            <img src={Logo10} alt="pic"/>
                        </div>
                    </div>
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
                    <div className={classes.twos}>
                        <p className={classes.p1}>available balance</p>
                        <h4 className={classes.h4}>₦ 340,000    .78</h4>
                        <div>
                            <img src={Logo11} alt="pic"/>
                            <p>36.5%</p>
                        </div>
                        <Button name='Withdraw Fund'/>
                    </div>
                    {/* <div className={classes.two}></div> */}
                    </div>
                    <div className={classes.moves}>
                        <p>Contract payment</p>
                        <h4>₦ 340,000    .78</h4>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
      
    </div>
  )
}

export default Solution
