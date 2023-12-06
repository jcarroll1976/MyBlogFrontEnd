import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (
    <div className='navlink-div'>
        <Link className='navlink' to = "/"><h2>Daily Blogs</h2></Link>
        <ul className='category-list'>
            <li>General</li>
            <li>Tech</li>
            <li>Books</li>
            <li>Movies & TV</li>
            <li>Music</li>
            <li>Gaming</li>

        </ul>
        <ul className='navlink-list'>
            <Link className='navlink' to = "/signup"><li >Sign Up</li></Link>
            <Link className='navlink' to = "/login"><li >Sign In</li></Link>
        </ul>
    </div>
  )
}

export default Navbar