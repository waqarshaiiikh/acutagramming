import React from 'react'
import logo from '../../assets/logo.png'
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaTiktok, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components';

export const FootStyled = styled(Footer)((props)=>({

  border: '1px solid black',

}));

const Footer = () => {
  return (
    <footer className={props.className}>
      <div className='footer-inner-div'>
        <div className='footer-logo-tagline'>
          <div className='footer-logo'>
            <img src={logo} alt="logo" />
          </div>
          <div className='footer-tagline'></div>
          <p>We help coaches turn their social media presence to a new revenue stream!</p>
        </div>
        <div className='footer-social-media-icons'>
          <AiOutlineInstagram />
          <BsFacebook />
          <AiFillLinkedin />
          <FaTiktok />
          <FaTwitter />
        </div>
      </div>
      <div className='footer-tabs-link'>
        <h2> Company</h2>
        <div className='footer-tabs'>
          <a href={'/About'}>About</a>

        </div>
        <div className='footer-tabs'>

          <a href={'/About'}>Work</a>
        </div>
        <div className='footer-tabs'>
          <a href={'/About'}>Pricing</a>

        </div>
      </div>

      <div className='footer-tabs-link-legal'>
        <h2> Company</h2>
        <div className='footer-tabs'>
          <a href={'/Privacy'}>Privacy</a>
        </div>
        <div className='footer-tabs'>
          <a href={'/Terms'}>Terms</a>
        </div>
      </div>
      <div className='footer-border-line'></div>
      <div className='footer-company-rights'> <h2>© 2023 Acutagramming. All rights reserved.</h2></div>

    </footer>
  )
}

export default Footer