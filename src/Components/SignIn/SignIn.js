import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo11 from '../../Assests/logo.svg'
import Logo12 from '../../Assests/google.png'
import './SignIn.css'
// https://www.coreldraw.com/en/pages/10600028.html



const SignIn = () => {
    const [displayHamburger, setDispalyHamburger] =useState(true)

    function handleDisplay (){
       return setDispalyHamburger(preDisplay => !preDisplay)
    }
  return (
    <div>
        <div className='main'>
        <div className='head'>
            <Link to='/'>
                <img src={Logo11} alt="pic"/>
            </Link>
            <ul className={displayHamburger? "ul": "navShow"} >
                <Link ton="/testimonial">
                    <li>Privacy Policy</li>
                </Link>
                <Link to="/testimonial">            
                    <li>Terms of Service</li>
                </Link>
            </ul>
            <div className='hamburger' onClick={handleDisplay}> 
            {

                displayHamburger ?<span>&#9776;</span>:<span>&times;</span>
            }
            </div>
        </div>
        </div>

        <div className='containerForm'>
            <div>
                <h4>Welcome Back</h4>
                <p className='part'>Enter your account details to Sign In</p>
            </div>
            <div>
                <div>
                    <input
                    type="email"
                    name="email"
                    placeholder='Email Address'
                    required
                    /> 
                </div>
                <div>
                    <input
                    type="password"
                    name="password"
                    placeholder='Enter Password'
                    required
                    /> 
                </div>

            </div>
            <p className='forgot'>Forgot Password?</p>
            <div className='last-btn'>
                    <button className='Lone'> <img  src={Logo12} alt="pic"/>Sign Up with Google</button>
                    <button className='Ltwo'>Sign Up</button>
            </div>
             
        </div>
        <p className='Lpart'>Not a member? 
          <Link to="/signup">Sign Up</Link>
        </p>
    </div>
  )
}

export default SignIn
