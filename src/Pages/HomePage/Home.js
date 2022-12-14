import React from 'react'
import Carousel from "react-elastic-carousel"
import Button from '../../Components/Button/Button'
import Hero from '../../Components/Hero/Hero'
import Logo2 from '../../Assests/colors.png'
import './Home.css'
import Cards from '../../Components/Cards/Cards'
import Help from '../../Components/Help/Help'
import Solution from '../../Components/Solution/Solution'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Dashboard from '../../Components/Dashboard/Dashboard'
import Caro from '../../Components/Caro/Caro'
import What from '../../Components/WhatTheySay/What'
import BlueCard from '../../Components/BlueCard/BlueCard'
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const cardData= [
    {id:1, logo:Logo2, topic:'Contract',text:'The payment terms, timeline, contract goals, NDA’s, tasks, and everything needed to make sure the work is understood and done.'},
    {id:2, logo:Logo2, topic:'Pay', text:'Before contract starts; money is kept till tasks are submitted and work approved'},
    {id:3, logo:Logo2, topic:'Track', text: 'Work progress, work speed and submitted deliverables in real time.'},
    {id:4, logo:Logo2, topic:"Approve", text:'That the job was done as expected and money is released accordingly.'}

  ];
  const breakPoints=[
    {width: 1,itemsToShow:1},
    {width: 500,itemsToShow:2},
    {width: 768,itemsToShow:2},
    {width: 1200,itemsToShow:3}
  ];
  const caroData =[
    {id:1, head:"“A bit like building a house, from floor plans to final coat of paint. Our process is very flexible”", text:"Julie - Product Designer "},
    {id:2, head:"“A bit like building a house, from floor plans to final coat of paint. Our process is very flexible”", text:"Julie - Product Designer "},
    {id:3, head:"“A bit like building a house, from floor plans to final coat of paint. Our process is very flexible”", text:"Julie - Product Designer "},
    {id:4, head:"“A bit like building a house, from floor plans to final coat of paint. Our process is very flexible”", text:"Julie - Product Designer "},
    {id:5, head:"“A bit like building a house, from floor plans to final coat of paint. Our process is very flexible”", text:"Julie - Product Designer "}
  ];
  
  return (
    <div className='home'>
      <Navbar/>
    <div className='for-heroSection'>
     <Hero 
      first='Helping digital products '
      second='The workplace for remote contracts gigs.'
      third="Smarg is a remote contract facilitator that aims to secure, manage and ensure quality delivery for freelancers"
      />
      <form className='form'>
        <input 
        type="text"
        placeholder='Enter Email Address'
        />
        <Link to="/signup">
          <Button name="Get Started"/>
        </Link>
      </form>
      </div>
      <div>
        <Dashboard/>
      </div>
      <Help
        one="Helping digital"
        two="Talk of the Best Platform Anywhere"
        three ="The status of a client or freelancer is based on who created the contract or who the role is assigned to. In that regard, no separate client or freelancer dashboard. Based on one’s status on the contract, features would be enabled or hidden on the dashboard."
       />
      <div className='for-cards'>
        {
          cardData.map(items=>(
            <Cards img={items.logo} topic={items.topic} text={items.text} key={items.id}/>
          ))
        }
      </div>
      <div className='for-solution'>
        <Solution/>
      </div>
      <div>
        <What/>
      </div>
          <Carousel breakPoints={breakPoints}>
            {
              caroData.map((item)=>(
                <Caro header={item.head} text={item.text} key={item.id}/>
              ))
            }
          </Carousel>
          <div className='for-BlueCard'>
            <BlueCard/>
          </div>
          <div>
            <Footer/>
          </div>
       
    </div>
  )
}

export default Home
