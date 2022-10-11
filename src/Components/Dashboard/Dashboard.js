import React from 'react'
import Logo13 from '../../Assests/Image.png'
import Logo14 from '../../Assests/circle.png' 
import Logo15 from '../../Assests/money.png' 
import Logo16 from '../../Assests/tag.png' 
import './Dashboard.css'
import Button from '../Button/Button'

const Dashboard = () => {
    
  return (
    <div className='top'>
        <div className='posi'>
            <img src={Logo13} alt="pix"/>
        </div>
        <div className='bigger'>
          <h3 className='big'>Providing Remote Contract Facilitator. Still want more?</h3>
          <div className='dashcontent'>
            <div className='dashy'>
              <div className='dashflex'>
                <img  src={Logo14} alt="pic"/>
                <h3>35x</h3>
              </div>
              <p>Efficient than any Local Means</p>
            </div>
            <div className='dashy'>
              <div className='dashflex'>
                <img  src={Logo15} alt="pic"/>
                <h3>₦0.00</h3>
              </div>
              <p>For Choosing the best way of Contract</p>
            </div>
            <div className='dashy'>
              <div className='dashflex'>
                <img  src={Logo16} alt="pic"/>
                <h3>0%</h3>
              </div>
              <p>For Choosing the best way of Contract</p>
            </div>
          </div>
            
        {/* <div className='forbtn'>
          <Button name="Get Started"/>
          <Button name="Downlaod Template"/>
        </div> */}
        </div>
    </div>
  )
}

export default Dashboard