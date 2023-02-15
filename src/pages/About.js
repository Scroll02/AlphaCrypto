import React from 'react'
import './About.css'
import AboutUsImage from '../assets/aboutUs.svg'
import OurTeamLogo from '../assets/ourTeamBg.svg'
import { BsFacebook, BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";
import OurTeam from '../components/OurTeam'


const About = () => {
  return (
    <div>
        <div className='section'>
          <div className='container'>
              <div className='title'>
                <h1>About Us</h1>
              </div>
              <div className='content'>
                <div className='article'>
                    <h3>A cryptocurrency is a digital or virtual currency that is protected by encryption, making counterfeiting and double-spending 
                        practically impossible. Many people invested in cryptocurrency and alpha crypto can help you to track the value of the coins 
                        in crypto world. 
                    </h3>
                    <p>
                    Cryptocurrencies are distinguished by the fact that they are not issued by any central authority, making them potentially 
                    impervious to government intervention or manipulation. Alpha Crypto can ensure the quality of our service.
                    </p>

                    <div className='button'>
                        <a href="">Read More</a>
                    </div>
                </div>
              </div>

              <div className='image-section'>
                  <img className='aboutUs-image' src={AboutUsImage}/>
              </div>

          </div>

                <div className='ourTeam'>
                  <h1>MEET OUR TEAM!</h1>
                  <h3>Meet the people behind the product. The AlphaCrypto team is a close knit group of people working towards the same goal in the crypto space.</h3>
                  <img className='ourTeamLogo'src={OurTeamLogo}/>
                  <OurTeam/>
                </div>
        </div>
    </div>
  )
}

export default About
