import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
      <Link to = '/'>Website</Link>
        <ul>
            <li>
              <Link to ='/'>Home</Link>
              </li>
            <li>
              <Link to='/about'>About</Link>
              </li>
            <li>
              <Link to ='service'>Service</Link>
              </li>
        </ul>
    </nav>
  )
}
