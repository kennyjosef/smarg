import React from 'react'
import { Link } from 'react-router-dom'
import Logo11 from '../../Assests/logo.svg'
import Logo12 from '../../Assests/google.png'
import './SignIn.css'



const SignIn = () => {
  return (
    <div>
        <div className='main'>
        <div className='head'>
            <Link to='/'>
                <img src={Logo11} alt="pic"/>
            </Link>
            <ul className='ul' >
                <Link to="/testimonial">
                    <li>Privacy Policy</li>
                </Link>
                <Link to="/testimonial">            
                    <li>Terms of Service</li>
                </Link>
            </ul>
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
            <p>Forgot Password?</p>
            <div>
                    <button className=''> <img  src={Logo12} alt="pic"/>Sign Up with Google</button>
                    <button className=''>Sign Up</button>
            </div>
             
        </div>
        <p>Not a member? Sign Up</p>
    </div>
  )
}

export default SignIn
