import React from 'react'
import "./Footer.css";
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo}/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, rerum. Odit doloribus a hic quidem corporis? Suscipit ea natus nulla, molestiae nesciunt voluptatibus rem numquam dolore quas, illum impedit! Fugit?</p>
            <div className='social-media-icons'>
                <img src={assets.facebook_icon} />
                <img src={assets.twitter_icon} />
                <img src={assets.linkedin_icon} />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>Get in touch</h2>
            <ul>
                <li>+92 300 43987432</li>
                <li>tomato@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className='copy-right'> Copy right 2025 @ All right reserved by Tomato</p>
    </div>
  )
}

export default Footer
