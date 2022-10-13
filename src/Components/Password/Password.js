import React from 'react'
import  { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo11 from '../../Assests/logo.svg'
import './Password.css'


const Password = () => {
    const [showBurger, setShowBurger] = useState(true)

    function handleShow (){
        return setShowBurger(preShow=> !preShow)
    }
  return (
    <div className='me'>
         <div className='header'>
                <Link to='/'>
                    <img src={Logo11} alt="pic"/>
                </Link>
                <ul className={showBurger? 'ul-link': 'navShow'}>
                <Link to="/testimonial">
                    <li>Privacy Policy</li>
                </Link>
                <Link to="/testimonial">            
                    <li>Terms of Service</li>
                </Link>
                </ul>
                <div className='hamburger' onClick={handleShow}>
                    {

                    showBurger?<span>&#9776;</span>:<span>&times;</span>
                    }
                </div>
            </div>
            <div className='password'>
                <h3>Forgot Password</h3>
                <p>Enter your email address to reset your password</p>
                <div className='forgotInput'>
                    <form>
                        <div className='forgotInput-first'>
                            <input  type="text" placeholder="Email Address" />
                        </div>
                        <div className='forgotInput-second'>
                            <Link to="/confirm">
                                <input type="submit" value="Sign In"/>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <p className='passwordPara'>Already a member? <Link>Sign In</Link> </p>
      
    </div>
  )
}

export default Password
