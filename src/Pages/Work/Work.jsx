import React from 'react'
import { Link } from 'react-router-dom';
import { FooterStyle } from '../CommonComponents/Footer';
import { HeaderStyle } from '../CommonComponents/Header';
import MainSection from './Component/MainSection';

const Work = () => {
  return (<>
    <HeaderStyle />
    <MainSection/>
    <FooterStyle />
  </>
  )
}

export const WorkLink = () => (<Link to='/Work' >Work</Link>);

export default Work