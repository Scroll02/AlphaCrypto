import React from 'react'
import './OurTeam.css'
import Member1 from '../assets/member1.jpg'
import Member2 from '../assets/member2.jpg'
import Member3 from '../assets/member3.jpg'
import Member4 from '../assets/member4.jpg'
import Member5 from '../assets/member5.jpg'
import { BsFacebook, BsDiscord, BsInstagram, BsTwitter } from "react-icons/bs";

const OurTeam = () => {
  return (
    <div>
        <div className='container'>
            <div className='card'>
                <div className='content'>
                    <div className='imgBx'><img className='img-profile' src={Member1}/></div>
                    <div className='contentBx'>
                        <h3>Cristel Ivanne Cayona<br></br><span>Co-Founder</span></h3>
                    </div>
                </div>

                <ul className = 'social'>
                  <li><a href='https://www.facebook.com'><BsFacebook/></a></li>
                  <li><a href='https://www.instagram.com'><BsInstagram /></a></li>
                  <li><a href='https://twitter.com'><BsTwitter/></a></li>
                </ul>
            </div> 

            <div className='card'>
                <div className='content'>
                    <div className='imgBx'><img className='img-profile' src={Member2}/></div>
                    <div className='contentBx'>
                        <h3>Raven Rovic Reyes<br></br><span>Co-Founder</span></h3>
                    </div>
                </div>

                <ul className = 'social'>
                  <li><a href='https://www.facebook.com'><BsFacebook/></a></li>
                  <li><a href='https://www.instagram.com'><BsInstagram /></a></li>
                  <li><a href='https://twitter.com'><BsTwitter/></a></li>
                </ul>
            </div> 

            <div className='card'>
                <div className='content'>
                    <div className='imgBx'><img className='img-profile' src={Member3}/></div>
                    <div className='contentBx'>
                        <h3>Angelo L. Mallari<br></br><span>Mobile App Developer</span></h3>
                    </div>
                </div>

                <ul className = 'social'>
                  <li><a href='https://www.facebook.com'><BsFacebook/></a></li>
                  <li><a href='https://www.instagram.com'><BsInstagram /></a></li>
                  <li><a href='https://twitter.com'><BsTwitter/></a></li>
                </ul>
            </div> 

            <div className='card'>
                <div className='content'>
                    <div className='imgBx'><img className='img-profile' src={Member4}/></div>
                    <div className='contentBx'>
                        <h3>Christian Joel Banquito<br></br><span>Mobile App Developer</span></h3>
                    </div>
                </div>

                <ul className = 'social'>
                  <li><a href='https://www.facebook.com'><BsFacebook/></a></li>
                  <li><a href='https://www.instagram.com'><BsInstagram /></a></li>
                  <li><a href='https://twitter.com'><BsTwitter/></a></li>
                </ul>
            </div> 

            <div className='card'>
                <div className='content'>
                    <div className='imgBx'><img className='img-profile' src={Member5}/></div>
                    <div className='contentBx'>
                        <h3>John Paul Mendoza Manuel<br></br><span>Mobile App Developer</span></h3>
                    </div>
                </div>

                <ul className = 'social'>
                  <li><a href='https://www.facebook.com'><BsFacebook/></a></li>
                  <li><a href='https://www.instagram.com'><BsInstagram /></a></li>
                  <li><a href='https://twitter.com'><BsTwitter/></a></li>
                </ul>
            </div> 
        </div>
  </div>
  )
}

export default OurTeam
