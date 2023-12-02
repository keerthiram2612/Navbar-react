import React ,{useState} from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css" ;
export default function Navbar() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <nav>
      <NavLink to = '/' className='title'>Website</NavLink>
      <div className='menu' onClick={()=>{
        setMenuOpen(!menuOpen);
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen ? "open" : ""}>
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
