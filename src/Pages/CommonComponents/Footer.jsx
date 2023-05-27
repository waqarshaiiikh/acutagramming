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
      <div className='footer__section main_dev'>

        <div className='footer__section__content logo-content'>
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

        <div className='footer__section__content company'>
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

        <div className='footer__section__content legal'>
          <h2 className='tabs-title'> Legal</h2>
          <div className='footer-tabs'>
            <NavLink to={'/Privacy'}> Privacy</NavLink>
          </div>
          <div className='footer-tabs'>
            <NavLink to={'/Terms'}>Terms</NavLink>
          </div>
        </div>
      </div>

      <div className='footer__section line'></div>
      <div className='footer__section footer-company-rights'> <h2>© 2023 Acutagramming. All rights reserved.</h2></div>
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
    // flexWrap: 'wrap',
    
    /**to be removed */

    /**to be removed */
    
    // paddingTop: '30px'
    width: "100%",
    minHeight: '400px',
    // padding: "50px 30px"
    
  },
  /**Main div wraps all the content footer except the divider and the divider */
  '& .footer__section': {
    // border: '1px solid black',
    flexGrow:1,
    display: 'flex',
    // flexWrap: 'wrap',
    // minWidth: '500px',
    width:'100%',
    //   gap: '2rem',
    // justifyContent:'center',
    // justifyContent: 'space-between',
    '& .footer__section__content:nth-child(1)': {
      flexGrow: 2,
    },
    '& .footer__section__content': {
      flexGrow: 1,
    },
    '& .logo-content':{
      maxWidth: '300px'
    },


    "& .main_dev":{
      display: 'flex',
      // flexWrap: 'nowrap',
      border: '1px solid black',

    }

  },
  /* Footer contain div that has logo and company motive*/
  '& .logo-content': {
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
  "& .line": {
    borderTop: '1px solid white',
    maxWidth: '1040px',
  },


  /*Ending Notes*/
  ".footer-company-rights": {
    paddingBottom: '20px',
    fontSize: '11px',
    h2: {
      fontWeight: 'normal'
    }
  }



}))


export default Footer


