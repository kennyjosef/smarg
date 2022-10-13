import React, { useEffect, useState } from 'react'
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

    const forSignValues = { email: "", password: ""}
    const [signValues, setSignValues]= useState(forSignValues)
    const [signinErrors, setSigninErrors]= useState({})
    const [signSubmit, setSigntSubmit] = useState (false)

    const handleSign =(e)=>{
        const {name, value}=e.target
        setSignValues({...signValues, [name]:value})
        console.log(signValues)
    }
    const handleSignSubmit=(e)=>{
        e.preventDefault()
        setSigninErrors(validateSign(signValues))
        setSigntSubmit(true)
    }
    // useEffect(()=>{
    //     if(Object.key(signinErrors).length===0 && signSubmit){

    //     }
    // },[signinErrors])
    const validateSign =(values)=>{
        const errors={};
        const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if(!values.email){
            errors.email= "Email is required"
        }else if (!regex.test(values.email)) {
            errors.email="Not a  valid input " }else{
            errors.email="Valid "
        }
        if(!values.password){
            errors.password= "Password is required"
        }else if(values.password.length < 4){
            errors.password="Password must be more than 4 characters"
        }else if(values.password.length > 10){
            errors.password="Password cannot be greater than ten characters"
        }else{
            errors.password='Valid Input'
        }
        return errors


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

        <form className='containerForm' onSubmit={handleSignSubmit}>
            {/* <pre>{JSON.stringify(signValues, undefined,2)}</pre> */}
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
                    value={signValues.email}
                    onChange={handleSign}                    
                    /> 
                </div>
                <p className='error'>{signinErrors.email}</p>
                <div>
                    <input
                    type="password"
                    name="password"
                    placeholder='Enter Password'
                    value={signValues.password}
                    onChange={handleSign}
                    /> 
                </div>
                <p className='error'>{signinErrors.password}</p>

            </div>
            <Link to="/password">
                <p className='forgot'>Forgot Password?</p>
            </Link>
            <div className='last-btn'>
                    <button className='Lone'> <img  src={Logo12} alt="pic"/>Sign Up with Google</button>
                    <button className='Ltwo'>Sign Up</button>
            </div>
             
        </form>
        <p className='Lpart'>Not a member? 
          <Link to="/signup">Sign Up</Link>
        </p>
    </div>
  )
}

export default SignIn
