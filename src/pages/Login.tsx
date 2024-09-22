import React from 'react'
import '../css/design.css'
import '../css/login.css'
import { Link } from 'react-router-dom'
import Prof from '../assets/svg/prof.svg'
function Login() {
  return (
    <div className='main'>
      <img src={Prof} alt="Image" />
      <p id='title'>Visual Notes</p>
      <form action="" method='POST'>
        <div className='in-body'>
          <input type="email" name="email" id="email" placeholder='Email' />
          <input type="password" name="password" id="password" placeholder='Password'/>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}><button id='btn'>Login</button></Link>
          <p>Don't have an account? <span id='sign'><Link to="/signup" style={{ textDecoration: 'none' }}><u>Sign Up</u></Link></span></p>
        </div>
      </form>
    </div>
  )
}

export default Login
