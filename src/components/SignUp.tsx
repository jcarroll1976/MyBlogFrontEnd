import React from 'react'
import "./SignUp.css"

function SignUp() {
  return (
    <div className='signup-background'>
      <div className='signup-form-container'>
        <form className='signup-form'>
          <h2>Sign Up</h2>
          <label htmlFor = "username">Enter a username</label>
          <input id = 'username' type = 'text' />
          <label htmlFor = 'password'>Enter a password</label>
          <input id = 'password' type = 'password' />
          <button type = "submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp