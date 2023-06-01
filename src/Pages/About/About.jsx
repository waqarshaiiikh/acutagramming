import React from 'react'
import { AboutPageTextStyle } from './Component/AboutPageText'
import { HeaderStyle } from '../CommonComponents/Header'
import { FooterStyle } from '../CommonComponents/Footer'
import { TeamStyle } from './Component/Team'
import WantsToConnect from '../CommonComponents/WantsToConnect'

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

export default About