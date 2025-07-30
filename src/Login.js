import { async } from '@firebase/util'
import { signInWithEmailAndPassword } from 'firebase/auth'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase'
 import "./Login.css"

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword] =useState('')
    const [loading, setLoading]=useState(false)
    const nav =useNavigate()

    // function to login
       const LoginUser = async(e)=>{
          e.preventDefault()
          setLoading(true)
          try{
            await signInWithEmailAndPassword(auth,email,password)
            nav('/')
          }catch(err){
            alert("Invalid Email or Password")
          }
          setLoading(false)
       }

  return (
     <section className='login-section'>
         <div className='login-card'>
             <img className='logo' src="./images/logo.jpg"/>
            <h2>Welcome Back To Login</h2>
            <p>login to your application  here!</p>
            <form  className='login-form'>
                 <input required value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter your Email' />
                 <input  required value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter your Password' />
                 <button onClick={LoginUser}>{loading?"please wait ....":'Login'}</button>
            </form>
            <p className='login-footer'>
                Don't have an Account? <a href='/signup'> SignUp</a>
            </p>
         </div>
     </section>
  )
}

export default Login