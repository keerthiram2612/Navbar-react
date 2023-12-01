import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <nav>
        <ul>
            <li>
              <Link>Home</Link>
              </li>
            <li>
              <Link>About</Link>
              </li>
            <li>
              <Link>Service</Link>
              </li>
        </ul>
    </nav>
  )
}
