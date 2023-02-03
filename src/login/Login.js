import React, { useState } from 'react'
import './login.css'
import {Link, useNavigate} from 'react-router-dom'
import { auth } from '../firebase'
function Login() {
    const history=useNavigate()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const login=event=>{
        event.preventDefault()//stops refresh
        auth.signInWithEmailAndPassword(email,password).then(auth=>{
            history('/')
        })
        .catch(err=>alert(err.message))
       
    }
    const register=event=>{
        event.preventDefault()//stops refresh
        auth.createUserWithEmailAndPassword(email,password).then(auth=>{
            history('/')
        })
        .catch(err=>alert(err.message))
    }
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
        alt=''/>
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
        <h5>Email</h5>
        <input value={email} onChange={event=>setEmail(event.target.value)} type='email'/>
        <h5>Password</h5>
        <input value={password} onChange={event=>setPassword(event.target.value)} type={'password'}/>
        <button onClick={login} type='submit' className='loginSigninbtn'>Sign In</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button onClick={register} className='loginRegisterbtn'>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
