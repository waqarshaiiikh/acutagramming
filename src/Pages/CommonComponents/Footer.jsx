import React from 'react'
import logo from '../../assets/logo-white-text.png'
import { AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaTiktok, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer className={props.className}>
      <div className='footer-content'>

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

        <div className='footer-tabs-link .company'>
          <h2 className='tabs-title'> Company</h2>
          <div className='footer-tabs'>
            <NavLink to={'/About'}>About</NavLink>
          </div>
          <div className='footer-tabs'>
            <NavLink href={'/About'}>Work</NavLink>
          </div>
          <div className='footer-tabs'>
            <NavLink href={'/About'}>Pricing</NavLink>
          </div>
        </div>

        <div className='footer-tabs-link .legal'>
          <h2 className='tabs-title'> Legal</h2>
          <div className='footer-tabs'>
            <NavLink to={'/Privacy'}> Privacy</NavLink>
          </div>
          <div className='footer-tabs'>
            <NavLink to={'/Terms'}>Terms</NavLink>
          </div>
        </div>
      </div>

      <div className='divider-wrapper'>
        <div className='divider-padding'>
          <div className='divider'>
            <div className='line'></div>
          </div>
        </div>
      </div>

      <div className='footer-ending-note'>
        <div className='footer-company-rights'> <h2>© 2023 Acutagramming. All rights reserved.</h2></div>
      </div>

    </footer>
  )
}


export const FooterStyle = styled(Footer)((props) => ({

  "&": {
    border: '1px solid black',
    backgroundColor: 'rgb(32, 32, 32)',
    color: '#ADADAD',
    fontFamily: '"Inter", Sans-serif',
    fontWeight: 'normal',
    fontSize: '17px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    width: "100%",
    left: '0px',
    bottom: '0px',
    paddingTop: '30px'

  },
  /**Main div wraps all the content footer except the divider and the divider */
  '& .footer-content': {
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-between',
  },
  /* Footer contain div that has logo and company motive*/
  '& .footer-inner-div': {
    padding: '0px 40px',
  },
  /**Footer Tab css div */
  "& .footer-tabs-link": {
    '&': {
      padding: '0px 40px'
    },
    '& .tabs-title': {
      color: 'white',
      textTransform: 'uppercase',
      fontSize: '17px',
      fontWeight: '600',
      paddingBottom: '10px'
    },
    '& .footer-tabs': {
      padding: '10px 0px',
    },
    '& .footer-tabs a': {
      color: '#ADADAD',
      textDecoration: 'none',
    },
  },

  /*divider*/
  "& .divider-wrapper": {
    width: '100%',
    "& .divider": {
      padding: '15px 0px',
    },
    "& .divider-padding": {
      padding: '10px',
    },
    "& .line": {
      borderTop: '1px solid white',
      maxWidth: '1000px',
      margin: 'auto'
    },
  },

  /*Ending Notes*/
  "& .footer-ending-note": {
    width: '99%',
    display: 'flex',
    justifyContent: 'center',
    ".footer-company-rights": {
      paddingBottom: '20px',
      fontSize: '11px',
      h2: {
        fontWeight: 'normal'
      }
    }
  }




}))


export default Footer


