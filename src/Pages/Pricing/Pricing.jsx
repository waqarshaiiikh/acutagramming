import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../CommonComponents/Header';
import { FooterStyle } from '../CommonComponents/Footer';
import Section from './Component/Section';

const Pricing = () => {
  useEffect(()=>{
    document.title = 'Pricing - Acutagramming';
  },[])
  return (
    <>
        <HeaderStyle/>
        <Section/>
        <FooterStyle/>
    </>
  )
}

export const PricingLink = (props) => <Link to='/Pricing'  onClick={props.onClick} >Pricing</Link>;


export default Pricing