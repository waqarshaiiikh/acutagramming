import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../CommonComponents/Header';
import { FooterStyle } from '../CommonComponents/Footer';
import Branding from './Component/Branding';

const Pricing = () => {
  return (
    <>
        <HeaderStyle/>
        <Branding/>
        <FooterStyle/>
    </>
  )
}

export const PricingLink = () => <Link to='/Pricing'>Pricing</Link>;


export default Pricing