import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css" ;
export default function Navbar() {
  return (
    <nav>
      <NavLink to = '/' className='title'>Website</NavLink>
        <ul>
            <li>
              <NavLink to ='/'>Home</NavLink>
              </li>
            <li>
              <NavLink to='/about'>About</NavLink>
              </li>
            <li>
              <NavLink to ='service '>Service</NavLink>
              </li>
        </ul>
    </nav>
  )
}
