import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../CommonComponents/Header';
import { FooterStyle } from '../CommonComponents/Footer';
import Section from './Component/Section';

const Pricing = () => {
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