import React from 'react'
import { AboutPageTextStyle } from './Component/AboutPageText'
import { HeaderStyle } from '../CommonComponents/Header'
import { FooterStyle } from '../CommonComponents/Footer'
import { TeamStyle } from './Component/Team'

const About = () => {
  return (
    <>
      <HeaderStyle />
      <AboutPageTextStyle/>
      <TeamStyle/>
      <FooterStyle />
    </>
  )
}

export default About