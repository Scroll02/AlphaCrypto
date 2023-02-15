import React, {useState} from 'react'
import { BsCoin } from "react-icons/bs";
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  return (
    
      <div className='navbar'>
          <div className='navbar-icon'>
            <BsCoin className='icon'/>
            <h1><span className='purple'>AlphaCrypto</span></h1>
          </div>
          
          <div className={`nav-items ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <Link to='/'>Coins</Link>
            <Link to='/about'>About</Link>
            <Link to='/contactUs'>Contact Us</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/newsletter'>Newsletter</Link>
            <Link to='/faq'>FAQ</Link>
          </div>

          <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <div className='bar'></div>
          </div>
      </div>
    
  )
}

export default Navbar