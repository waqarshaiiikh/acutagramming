import React from 'react'
import { Link } from 'react-router-dom';
import { FooterStyle } from '../CommonComponents/Footer';
import { HeaderStyle } from '../CommonComponents/Header';
import MainSection from './Component/MainSection';
import { useEffect } from 'react';

const Work = () => {
  useEffect(()=>{
    document.title = 'Work - Acutagramming';
  },[])
 return (<>
    <HeaderStyle />
    <MainSection/>
    <FooterStyle />
  </>
  )
}

export const WorkLink = (props) => (<Link to='/Work' onClick={props.onClick} >Work</Link>);

export default Work