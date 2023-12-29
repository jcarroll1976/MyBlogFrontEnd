import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className="blog-background">
      <div className='login-container'>
        <form className='login-form'>
          <h2>Login</h2>
          <label htmlFor = "username">Enter your username</label>
          <input id = 'username' type = 'text' />
          <label htmlFor='password'>Enter your password</label>
          <input id='password' type="text" />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login