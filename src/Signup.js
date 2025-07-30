import { async } from '@firebase/util'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React,{useState} from 'react'
import {auth} from "./firebase"
import "./Signup.css"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail]= useState("")
  const [password,setPassword]=useState("")
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState('')
  const nav =useNavigate()


  // function to cretae Account

     const createAccount = async (e)=>{
       e.preventDefault()
       setLoading(true)
       try{
        await createUserWithEmailAndPassword(auth,email,password)
        alert('Account Created Succesfully')
        setEmail('')
        setPassword('')
        setLoading(false)
        nav("/login")
       }catch(err){
        alert(setError(err.message) || " Something went wrong")
       }
     }
  return (
       <section className='signup-section'>
           <div className='signup-card'>
           <img className='logo' src="./images/logo.jpg"/>
              <h2>Create Account</h2>
              <p> Join us and explore our amazing Hostel Apartments</p>
              <form className='signup-form'>
                     <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email"placeholder='Enter Your Email' />
                     <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Your Password' />
                     <button onClick={createAccount}>{loading?'Creating Account ..':'Create Account'}</button>
              </form>
              <p>Already have an Account? <a href='/login'>Login</a></p>
           </div>
       </section>
  )
}

export default Signup