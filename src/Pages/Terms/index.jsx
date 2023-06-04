import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';

const slideAnimation = keyframes`${fadeInRight}`;
const SlideInDiv = styled.h2`
  animation: 2s ${slideAnimation};
`;

const index = ({ className }) => {
    useEffect(() => {
        document.title = 'Terms of Services - Acutagramming';
    }, [])


    return (
        <section className={className}>
            <SlideInDiv className='main__heading--h2'>Terms of Service</SlideInDiv>
            <h2 className='sub__heading--h2'>1. Terms</h2>
            <p className='content__para'>By accessing this web site, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this web site are protected by applicable copyright and trade mark law. </p>
            <h2 className='sub__heading--h2'>2. Services</h2>
            <p className='content__para'>Acutagramming does not guarantee any specific result or growth from purchase of any service provided by Acutagramming. Any claim otherwise is false. The results of any individual campaign can be less, equal to, or greater than the results advertised by Acutagramming. Acutagramming makes no guarantee of service. Acutagramming reserves the right to refuse any service, in part or in whole.</p>
            <h2 className='sub__heading--h2'>3. Disclaimer</h2>
            <p className='content__para'>The materials and services provided by Acutagramming and on acutagramming.com are provided “as is”. Acutagramming makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Acutagramming does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its Internet web site or otherwise relating to such materials or on any sites linked to this site.</p>
            <h2 className='sub__heading--h2'>4. Limitations</h2>
            <p className='content__para'>
                In no event shall Acutagramming or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption,) arising out of the use or inability to use the materials on Acutagramming‘s Internet site, even if Acutagramming or a Acutagramming authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
            </p>
            <h2 className='sub__heading--h2'>5. Revisions and Errata</h2>
            <p className='content__para'>The materials appearing on Acutagramming’s web site could include technical, typographical, or photographic errors. Acutagramming does not warrant that any of the materials on its web site are accurate, complete, or current. Acutagramming may make changes to the materials contained on its web site at any time without notice. Acutagramming does not, however, make any commitment to update the materials.</p>
            <h2 className='sub__heading--h2'>6. Links</h2>
            <p className='content__para'>Acutagramming has not reviewed all of the sites linked to its Internet web site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Acutagramming of the site. Use of any such linked web site is at the user’s own risk.</p>
            <h2 className='sub__heading--h2'>7. Site Terms of Use Modifications</h2>
            <p className='content__para'>Acutagramming may revise these terms of use for its web site at any time without notice. By using this web site you are agreeing to be bound by the then current version of these Terms and Conditions of Use.</p>
            <h2 className='sub__heading--h2'>8. Governing Law</h2>
            <p className='content__para'>Any claim relating to Acutagramming‘s web site shall be governed by the laws of the State of Pakistan without regard to its conflict of law provisions.</p>
            <h2 className='sub__heading--h2'>9. Contact</h2>
            <p className='content__para'>If you have any questions about these terms, please contact us at <a href="mailto:contact@acutagramming.com">contact@acutagramming.com</a></p>
            <h2 className='sub__heading--h2'>10. Fulfillment</h2>
            <p className='content__para'>
                <span
                    style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px', fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 400 }} >Acutagramming</span>
                &nbsp; will service all campaigns within 48 hours of receiving payment and campaigns will be managed and last according to what is discussed with a company representative. If there is no contact with a company representative before a client purchases a package, fulfillment will be based on the description of the service according to the website.</p>
            <h2 className='sub__heading--h2'>11. Refunds</h2>
            <p className='content__para'>If&nbsp;
                <span
                    style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px', fontStyle: 'normal', fontVariantLigatures: 'normal', fontVariantCaps: 'normal', fontWeight: 400 }} >Acutagramming</span>
                &nbsp;fails to reach the agreed-upon or minimum metrics agreed upon or shown on the website, a call or exchange of messages will be set up to explain the situation and the team will be given a minimum of 48 hours to adjusts the campaigns as necessary. If after adjusting the campaigns, the client fails to reach the agreed-upon metrics, a refund will be issued within 24 hours.</p>
        </section>
    )
}


const terms = styled(index)((props) => ({
    '&': {
        maxWidth: '1140px',
        margin: 'auto',
        padding: '10px 10px 60px 10px',

    },
    '& h2.main__heading--h2': {
        fontSize: '52px',
        padding: '40px 0',
        color: '#262E33',
    },
    '& h2.sub__heading--h2': {
        fontSize: '20px',
        color: '#333333',
        margin: '20px 0',
    },
    '& p.content__para': {
        color: '#374151',
        lineHeight: '1.8',
        fontSize: '20px',
    },
    '& a': {
        textDecoration: 'none',
        color: '#374151',
    },
    '& ul': {
        padding: '20px', // Adjust the padding as needed
    },
    '& ul li': {
        listStyleType: 'disc', // Show bullet points
        marginBottom: '5px', // Adjust the spacing as needed
        lineHeight: '1.8',

    },
    '@media screen and (max-width: 767px) ': {

        '& h2.main__heading--h2': {
            fontSize: '35px',
            textAlign: 'center',
        },
    },


}));

export const TermsLink = (props) => <Link to='/Terms' onClick={props.onClick} >Terms</Link>;


export default terms