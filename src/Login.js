import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import {  useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const signIn = e => {
        e.preventDefault();
        //some firebase  login happens here    }

    const register = e => {
        e.preventDefault();
        // here do some firebase register
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                navigate.push('/')
                //it successfully craeated a new user with email and oasswrod
                console.log(auth);
            })
            .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <Link to="/">
             <img
              className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="amazon-logo" />
        </Link>
        {/* The login container is going to contain all of the usere inputs, email,paswrd */}
        <div className="login__container">
            <h1>Sign-in</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password" value={password} onChange={ e => setPassword(e.target.value)} />
            </form>
            <button type='submit' onClick={signIn}
            className='login__signInButton'>Login</button>
            <p>By continuing, you agree to Amazon's Clone Conditions of Use and Privacy Notice.</p>
            <button onClick='register' className='login__registerButton'>Create your Amazon  Account</button>
        </div>
    </div>
  )
}
}

export default Login
