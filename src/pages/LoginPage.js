import React from "react"
import "../styles/LoginPage.css"

const LoginPage = () => {
  return (
    <div className='login'>
      <input className='user' type='text' placeholder='Username' />
      <input className='password' type='password' placeholder='Password' />
      <button className='button'>Log In</button>
    </div>
  )
}

export default LoginPage
