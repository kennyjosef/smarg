import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo11 from '../../Assests/logo.svg'
import Logo12 from '../../Assests/google.png'
import './Signup.css'

const SignUp = () => {
    const [showBurger, setShowBurger] = useState(true)

    function handleShow (){
        return setShowBurger(preShow=> !preShow)
    }
    const initialValues = {email: "",firstname: "",lastname: "",password: ""}
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors , setFormErrors]= useState({})
    const [isSubmit, setIstSubmit] = useState (false)
    const handleChange= (e)=>{
        const {name, value} =e.target
        setFormValues({...formValues, [name]:value})
        console.log(formValues)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIstSubmit(true)
        

    }
    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues)
        }
    }, [formErrors])
    const validate = (values)=>{
        const errors ={};
        const regex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        const regexName = /^[^-\s\d][a-zA-Z\s-]+$/
        if(!values.email){
            errors.email= "Email is required"
        }else if (!regex.test(values.email)) {
            errors.email="Not a  valid email " }
        
        if(!values.firstname){
            errors.firstname= "First Name is required"
        }else if (!regexName.test(values.firstname)){
            errors.firstname="Field does not accept numbers"
        }
        if(!values.lastname){
            errors.lastname= "Last Name is required"
        }else if (!regexName.test(values.lastname)){
            errors.lastname="Field does not accept numbers"
        }
        if(!values.password){
            errors.password= "Password is required"
        }else if(values.password.length < 4){
            errors.password="Password must be more than 4 characters"
        }else if(values.password.length > 10){
            errors.password="Password cannot be greater than ten characters"
        }
        
        return errors

        
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
            <div className='items'>
                <div className='items1'>
                    <p>Helping digital products </p>
                    <h3>The workplace for remote contracts gigs.</h3>
                    <p>Smarg is a remote contract facilitators</p>
                    <p className='para'>Already a member?
                        <Link to="/signin">Sign In</Link>
                    </p>
                </div>
                <div className='items2'>
                    <form onSubmit={handleSubmit}>
                        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                        <div className='formFirst'>
                            <input
                            type="email"
                            name="email"
                            placeholder='Emial Address'
                            value={formValues.email}
                            onChange={handleChange}

                            />
                            <p>{formErrors.email}</p>
                        </div>
                        <div className='formSecond'>
                            <div>
                            <input
                            type="text"
                            name="firstname"
                            placeholder='First Name'
                            value={formValues.firstname}
                            onChange={handleChange}
                            />
                            <p>{formErrors.firstname}</p>
                            </div>
                            <div>
                            <input
                            type="text"
                            name="lastname"
                            placeholder='Last Name'
                            value={formValues.lastname}
                            onChange={handleChange}

                            />
                            <p>{formErrors.lastname}</p>
                            </div>
                        </div>
                        <div className='formFirst'>
                        <input
                            type="password" 
                            name="password"
                            placeholder='Create Password'
                            value={formValues.password}
                            onChange={handleChange}

                            />
                            <p>{formErrors.password}</p>
                        </div>
                        <div className='words'>
                            <p>By signing up, I agree to the product’s <Link to="/testimonial"> Privacy Policy</Link> and <Link to="/testimonial">Terms of Service</Link></p>
                            <div>
                                <button className='one'> <img  src={Logo12} alt="pic"/>Sign Up with Google</button>
                                <button className='two'>Sign Up</button>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
           
        

    </div>
  )
}

export default SignUp