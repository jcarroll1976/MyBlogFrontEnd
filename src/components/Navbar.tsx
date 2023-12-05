import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navlink-div'>
        <Link to = "/"><h2>Daily Blogs</h2></Link>
        <ul>
            <Link to = "/login"><li>Sign Up</li></Link>
            <Link to = "/signup"><li>Sign In</li></Link>
        </ul>
    </div>
  )
}

export default Navbar