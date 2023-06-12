import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components';
import { fadeInRight } from 'react-animations';

const slideAnimation = keyframes`${fadeInRight}`;
const SlideInDiv = styled.h2`
  animation: 2s ${slideAnimation};
`;


const index = ({ className }) => {

    useEffect(()=>{
        document.title = 'Privacy Policy - Acutagramming';
      },[])

    return (
        <section className={className}>
            <SlideInDiv className='main__heading--h2'>Privacy Policy</SlideInDiv>
            <div className='content'>
                <p className='content__para'>This Privacy Policy (“Policy”) explains how information about You is collected, used, and disclosed by Your access or use of this Site or otherwise as a result of Your interactions with Us. By visiting this Site directly or through another site, You accept the terms and conditions of this Policy. This Policy applies to this Site. We are not responsible for the content or privacy practices on any website not operated by Us to which this Site links or that links to this Site.​We respect children’s privacy. We do not knowingly or intentionally collect personal information from children under age 13. Elsewhere on the Site, you have represented and warranted that you are either 18 years of age or using the Site with the supervision of a parent or guardian. If you are under the age of 13, please do not submit any personal information to Us, and rely on a parent or guardian to assist you.</p>
                <h2 className='sub__heading--h2'>Information Collection</h2>
                <p className='content__para'>​We collect information from you in several different ways on this Site.​</p>
                <h2 className='sub__heading--h2'>Registration and Ordering</h2>
                <p className='content__para'>​Before using certain portions of this Site or ordering products, you may be required to complete an online registration form. During registration, you will be asked to provide to Us certain personal information, including but not limited to your name, shipping and billing address(es), phone number, email address, gender, and credit card number. In addition, We may also ask you for your country of residence and/or your organization’s country of operation, so we can comply with applicable laws and regulations. These kinds of personal information are used for billing purposes, to fulfill your orders, to communicate with you about your order and the Sites, and for internal marketing purposes. If We encounter a problem when processing your order, your personal information may be used to contact you.​ We may also automatically collect information about you when you access or use the Site or transact business with Us, including:</p>

                <ul>
                    <li>Transaction Information: When you purchase or return a product, We collect information about the transaction, such as product details, purchase price, and the date and location of the transaction.</li>
                    <li>Log Information: We obtain information about your use of Our websites, including the type of browser you use, access times, pages viewed, your IP address and the page you visited before navigating to this Site.</li>
                    <li>Device Information: We collect information about the computer or mobile device you use to access Our Services, such as the hardware model, operating system and version, unique device identifiers, mobile network information, and browsing behavior.</li>
                    <li>Location Information: We may collect information about the precise location of your device when you consent to the collection of this information. We may also collect information about your approximate location each time you access this Site.</li>
                    <li>Information Collected by Cookies and other Tracking Technologies: We may use cookies, web beacons, and other tracking technologies to collect information about you and your interaction with this Site, including information about your browsing behavior, purchase behavior, and other engagement with the Services. We use this information in one or more of the ways described in the “Use of Information” section below. Most web browsers are set to accept cookies by default, but you can usually change your browser settings to remove or reject cookies.​Information We Collect from Other Sources​We may also receive information about you from other sources and combine or link that with information We have about you. For example, We may collect demographic and change-of-address information from third party sources and information from third party social media platforms (such as Facebook) if you log into this Site using your social media account credentials or if you make certain content and information publicly available, such as photos, videos, and profile information.​</li>
                </ul>

                <h2 className='sub__heading--h2'>Information Use and Disclosure</h2>
                <p className='content__para'>​Internal Use: ​We use your personal information to process your order and provide you with customer service. We may internally your personal information to improve this Site’s content and layout, to improve outreach and for Our own marketing efforts (including marketing our services and products to you), and to determine general marketplace information about visitors to this Site.​ Communications with You: ​We will use your personal information to communicate with you about this Site and your orders and deliveries. Also, We may send you a confirmation email when you register with Us. We may send you a service-related announcement on the rare occasions when it is necessary (for example, if we must temporarily suspend our service for maintenance.) Also, you may submit your email address for reasons such as to register for a contest or sweepstakes or to sign up for email newsletters and special offers. If you submit your email address, We use it to deliver the information to you. We always permit you to unsubscribe or opt out of future emails. Because We have to communicate with you about orders that you choose to place, you cannot opt out of receiving emails related to your orders. External Use​ Except as otherwise set forth below, We do not sell, rent, trade, license or otherwise disclose your specific personal information or financial information to anyone.​We may disclose information to third parties that perform specific functions on Our behalf. However, We will only disclose the information that is necessary for them to perform their service.​We must provide your credit card number to financial-services corporations such as credit-card processors and issuers as is required to process your orders. We will use industry-standard security measures, including data encryption when providing your credit card number to others.​ We may disclose personal information or financial information in response to requests from law enforcement officials conducting investigations; subpoenas; a court order; or if We are otherwise required to disclose such information by law. We also will release personal information where disclosure is necessary to protect our legal rights, enforce our Terms and Conditions or other agreements, or to protect ourselves or others. For example, We may share information to reduce the risk of fraud or if someone uses or attempts to use this Site for illegal reasons or to commit fraud.​While We will not sell (or trade or rent) personally identifiable information to other companies as part of Our regular course of business. However, it’s possible that We might acquire or merge with or be acquired by another company or that We might dispose of some or all of Our assets. If that happens, your personal information may be disclosed to another company, but that disclosure will be subject to the Privacy Policy in effect.​We may share non-personal information (such as the number of daily visitors to a particular web page, or the size of an order placed on a certain date) with third parties such as advertising partners. This information does not directly personally identify you or any user.</p>
                <h2 className='sub__heading--h2'>Data Security</h2>
                <p className='content__para'>​We take reasonable measures, including administrative, technical, and physical safeguards, to protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.​</p>
                <h2 className='sub__heading--h2'>Opt Out/Corrections</h2>
                <p className='content__para'>​Upon your request, We will (a) correct or update your personal information; (b) stop sending emails to your email address; and/or (c) disable your account to prevent any future purchases through that account. You can make these requests by emailing Us at <a href="mailto:contact@acutagramming.com">contact@acutagramming.com</a>. Please do not email your credit-card number or other sensitive information.​</p>
                <h2 className='sub__heading--h2'>Offline Collection Use and Disclosure</h2>
                <p className='content__para'>We also may collect information offline. We will treat any information collected offline in a manner that is consistent with this Policy. One example involves someone calling Us to place an order or to ask questions. When someone calls, We will ask only for the personal information We need in order to place the order or to answer the question. When We need to store information (such as order information), We will enter it into our database.​</p>
                <h2 className='sub__heading--h2'>Updates to this Policy</h2>
                <p className='content__para'>​If We change or update this Privacy Policy, We will post changes and updates on the Site so that you will always be aware of what information We collect, use and disclose. We encourage you to review this Policy from time to time so you will know if the Privacy Policy has been changed or updated. If you have any questions about the Policy, please contact us at&nbsp;<a href="mailto:contact@acutagramming.com">contact@acutagramming.com</a></p>

            </div>

        </section>
    )
}

const privacy = styled(index)((props) => ({

    '&': {
        maxWidth: '1140px',
        margin: 'auto',
        padding: '20px 10px 90px',

    },
    '& h2.main__heading--h2': {
        fontSize: '52px',
        padding: '40px 0',
        color: '#262E33',
        textAlign: 'center',
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

export const PrivacyLink = (props) => <Link to='/Privacy'  onClick={props.onClick} >Privacy</Link>;

export default privacy;