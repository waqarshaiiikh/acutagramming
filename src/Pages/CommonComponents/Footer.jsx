import React, { useCallback, useEffect } from "react";
import logo from "../../assets/logo-white-text.png";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { PricingLink } from "../Pricing/Pricing";
import { WorkLink } from "../Work/Work";
import { AboutLink } from "../About/About";


const Footer = (props) => {
  const scrollUp = useCallback(() => {
      window.scrollTo(0, 0);
    }
    , []
  )

  return (
    <footer className={props.className}>
      <div className="margin_auto responsive">
        <div className='footer__section main_div'>
          <div className='main_div_section logo-content'>
            <div className='footer-logo-tagline'>
              <div className='footer-logo'>
                <img src={logo} alt='logo' />
              </div>
              <div className='footer-tagline'>
                <p>
                  We help coaches turn their social media presence to a new
                  revenue stream!
                </p>
              </div>
            </div>
            <div className='footer-social-media-icons'>
              <div className='div_icon'>
                <FaInstagram className='icon' />
              </div>
              <div className='div_icon'>
                <BsFacebook className='icon' />
              </div>
              <div className='div_icon'>
                <FaLinkedin className='icon' />
              </div>
              <div className='div_icon'>
                <FaTiktok className='icon' />
              </div>
              <div className='div_icon'>
                <FaTwitter className='icon' />
              </div>
            </div>
          </div>

          <div className='main_div_section wrapper__company__and__legal'>
            <div className='footer__section__content company'>
              <h2 className='tabs-title'> Company</h2>
              <div className='footer-tabs'>
                <AboutLink onClick={scrollUp} />
              </div>
              <div className='footer-tabs'>
                <WorkLink onClick={scrollUp} />
              </div>
              <div className='footer-tabs'>
                <PricingLink onClick={scrollUp} />
              </div>
            </div>

            <div className='footer__section__content legal'>
              <h2 className='tabs-title'> Legal</h2>
              <div className='footer-tabs'>
                <NavLink to={"/Privacy"}> Privacy</NavLink>
              </div>
              <div className='footer-tabs'>
                <NavLink to={"/Terms"}>Terms</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className='footer__section line'>
          <hr></hr>
        </div>
        <div className='footer__section footer-company-rights'>
          <p>© 2023 Acutagramming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const FooterStyle = styled(Footer)((props) => ({
  "&": {
    background: "rgb(32, 32, 32)",
    color: "#ADADAD",
    "& .margin_auto": {
      margin: 'auto',
      maxWidth: '1140px'
    },
    "& .main_div": {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: 'wrap',
      padding: "70px 0 20px 0px",
      "& .wrapper__company__and__legal": {
        display: "flex",
      },
      "& .logo-content": {
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "35%",
      },
      "& .footer-logo": {
        marginBottom: "20px",
      },
      "& .footer-tagline": {
        margin: "10px auto 20px auto",
        padding: "0px 10px",
        fontSize: "17px",
      },
      "& .footer-social-media-icons": {
        display: "flex",
      },
      "& .div_icon": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "44px",
        width: "44px",
      },
      "& .footer-social-media-icons .icon": {
        fontSize: "22px",
      },
    },

    "& .footer__section__content": {
      width: "150px",
    },
    "& .tabs-title, .footer-tabs": {
      marginBottom: "15px",
      a: {
        textDecoration: "none",
        color: "#ADADAD",
      },
    },
    "& .tabs-title": {
      textTransform: 'uppercase',
      color: "#E3E3E3",
      fontSize: '17px',
      fontWeight: '600'
    },
    "& .line": {
      padding: "10px",
    },
    "& .footer-company-rights": {
      textAlign: "center",
      padding: "30px 20px 70px 20px",
      fontFamily: "Inter, Sans-serif",
      fontSize: "18px",
    },
  },
  '@media (max-width: 768px)': {
    "& .main_div": {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      gap: '1.25rem',
      '& .main_div_section': {
        width: 'inherit',
        textAlign: 'center',
      },
      '& .footer-social-media-icons': {
        justifyContent: 'center',
        flexWrap: 'wrap',
      }
    },
    "& .wrapper__company__and__legal": {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  },


}));

export default Footer;
