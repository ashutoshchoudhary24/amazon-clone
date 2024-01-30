import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = event => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Logged in and redirect to home page
        navigate('/');
      })
      .catch((e) => alert(e.message));
  }

  const register = event => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // Create a user, login and redirect to home page
        navigate('/');
      })
      .catch((e) => alert(e.message));
  }

  return (
    <div className='login'>
      <Link to="/">
        <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} type='submit' className='login__signInButton'>Sign in</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button onClick={register} className='login__registerButton'>Create your Amazon account</button>

      </div>
    </div>
  )
}

export default Login