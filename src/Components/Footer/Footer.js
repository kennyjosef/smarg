import React from 'react'
import { Link } from 'react-router-dom'
import Logo6 from '../../Assests/logo.svg'
import Logo7 from '../../Assests/facebook.png'
import Logo8 from '../../Assests/instagram.png'
import Logo9 from '../../Assests/tweet.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='item item1'>
            <div>
                <Link to="/">
                <img src={Logo6} alt="pic"/>
                </Link>
                <p>©2021 Smarg Inc.</p>
                <p>All Right Reserved</p>
                <div className='social'>
                <img src={Logo7} alt="pic"/>
                <img src={Logo8} alt="pic"/>
                <img src={Logo9} alt="pic"/>     
                </div>

            </div>
            <div>
                <h4>Usecases</h4>
                <p>Contract creation</p>
                <p>Contract Negotiation</p>
                <p>Escrow Wallet</p>
                <p>Task management</p>
                <p>Service Integrations</p>
            </div>
        </div>
        <div className='item item2'>
            <div>
                <h4>People</h4>
                <p>Developers</p>
                <p>Freelancers</p>
                <p>Clients</p>
                <p>Product Manager</p>
            </div>
            <div>
                <h4>People</h4>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer