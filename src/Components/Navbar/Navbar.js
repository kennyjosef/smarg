import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo1 from '../../Assests/logo.svg'
import Button from '../Button/Button'
import './Navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)

  function handleClick(){
      return setToggle(preToggle=> !preToggle)
  }
  return (
    <div className='fixed'>
      <div className='navbar'>
      <div>
        <Link to='/'>
        <img src={Logo1} alt='pic'/>
        </Link>
      </div>
        <ul className={toggle? ' ul' : 'navShow'}>
          <Link to="/">How it Works</Link>
          <Link to="/about">About Us</Link>
          <Link to="/testimonial">Testimonials</Link>
        </ul>
      <div className='nav-last'>
        <Link to="/signin">
          <p>Sign in</p>
        </Link>
        <Link to="/signup">
              <Button name='Get Started'/>
        </Link>
      </div>
        <div className='hamburger' onClick={handleClick} >
                {toggle?<span>&#9776;</span>:<span>&times;</span>
                }
        </div>
      </div>
    </div>
  )
}

export default Navbar
