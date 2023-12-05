import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navlink-div'>
        <Link to = "/"><h2>Daily Blogs</h2></Link>
        <ul className='navlink-list'>
            <Link to = "/signup"><li className='navlink'>Sign Up</li></Link>
            <Link to = "/login"><li className='navlink'>Sign In</li></Link>
        </ul>
    </div>
  )
}

export default Navbar