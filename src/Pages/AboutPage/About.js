import React from 'react'
import Help from '../../Components/Help/Help'
import Hero from '../../Components/Hero/Hero'
import Logo2 from '../../Assests/colors.png'
import Logo3 from '../../Assests/yellow.png'
import Logo4 from '../../Assests/white.png'
import Cards from '../../Components/Cards/Cards'
import classes from './About.module.css'
import Button from '../../Components/Button/Button'
import BlueCard from '../../Components/BlueCard/BlueCard'
import Navbar from '../../Components/Navbar/Navbar'


const About = () => {
    const data =[
        {id:1, logo:Logo2, topic: "Accountability", text:"The payment terms, timeline, contract goals, NDA’s, tasks, and everything needed to " },
        {id:2, logo:Logo2, topic:"Flexibility", text:"Before contract starts; money is kept till tasks are submitted and work approved"}
    ]
  return (
    <div>
        <Navbar/>
        <div>
            <Hero
            first="Helping digital products "
            second='We are on a Mission'
            third="Smarg is a remote contract facilitator that aims to secure, manage and ensure quality delivery for freelancers"
            />
        </div>
        <div>
            <Help
            one="about us"
            two="Talk of the Best Platform Anywhere"
            three ="The status of a client or freelancer is based on who created the contract or who the role is assigned to. In that regard, no separate client or freelancer dashboard. Based on one’s status on the contract, features would be enabled or hidden on the dashboard."
            />
        </div>
        <div className={classes.article}>
            <div className='none'></div>
            <div className={classes.articles}>
            {
                data.map(items=>(
                    <Cards img={items.logo} topic={items.topic} text={items.text} key={items.id}/>
                ))
            }
            </div>
        </div>
        <div className={classes.rel}>
        <div className={classes.picContent}>
            <div className={classes.forpic}>
                <img src={Logo3} alt="pic"/>
            </div>
            <div className={classes.cont}>
                <p className={classes.digi}>Helping digital</p>
                <h3 className={classes.great}>Great People make Great Product</h3>
                <p className={classes.sta}>The status of a client or freelancer is based on who created the contract or who the role is assigned to. In that regard, no separate client or freelancer dashboard. Based on one’s status on the contract, features would be enabled or hidden on the dashboard.</p>
                <Button name="Works With Us"/>
            </div>
        </div>
        <div className={classes.image}>
            <img src={Logo4} alt="pic"/>
        </div>
        </div>
        <div className={classes.forblue}>
            <BlueCard/>
        </div>
    </div>
  )
}

export default About
