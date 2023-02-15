import React from 'react'
import './Footer.css'
import { BsFacebook, BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='footer_container'>
          <ul className = 'social_icon'>
              <li><a href='https://www.facebook.com'><BsFacebook/></a></li>
              <li><a href='https://discord.com'><BsDiscord/></a></li>
              <li><a href='https://www.instagram.com'><BsInstagram /></a></li>
              <li><a href='https://twitter.com'><BsTwitter/></a></li>
          </ul>

          <ul className = 'footer_menu'>
              <li><Link to='/'>Coins</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/contactUs'>Contact Us</Link></li>
              <li><Link to='/blogs'>Blogs</Link></li>
              <li><Link to='/newsletter'>Newsletter</Link></li>
              <li><Link to='/faq'>FAQ</Link></li>
          </ul>

          <p>© 2022 Cryptocurrency. All Rights Reserved.</p>

      </div>
    </div>
  )
}

export default Footer
