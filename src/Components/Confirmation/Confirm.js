import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo11 from '../../Assests/logo.svg'
import Logo15 from '../../Assests/group.svg'
import './Confirm.css'



const Confirm = () => {
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
            <div className='confirm'>
                <img src={Logo15}/>
                <h3>Confirmation Link Sent</h3>
                <p>We sent a confirmation link to your email address. Kindly click the link to confirm</p>
                <div>
                    <input type="submit" value="Open Email App"/>
                </div>

            </div>
            <div className='confirmPara'>
                <p><span>Wrong Email</span></p>
                <p>Didn’t get the link? <span>Resend Code</span></p>
            </div>
      
    </div>
  )
}

export default Confirm
