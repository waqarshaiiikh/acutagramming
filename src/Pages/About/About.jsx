import React from 'react'
import { AboutPageTextStyle } from './Component/AboutPageText'
import { HeaderStyle } from '../CommonComponents/Header'
import { FooterStyle } from '../CommonComponents/Footer'
import { TeamStyle } from './Component/Team'
import WantsToConnect from '../CommonComponents/WantsToConnect'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <HeaderStyle />
      <AboutPageTextStyle/>
      <TeamStyle/>
      <WantsToConnect/>
      <FooterStyle />
    </>
  )
}

export const AboutLink = (props) => ( <Link to='/About' onClick={props.onClick} >About</Link> );

export default About