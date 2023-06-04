import React from 'react'
import styled from 'styled-components';
import ButtonStyle from '../../CommonComponents/ButtonComponent';
import Card from './Card';

const Section = (props) => {

    const pricingCard = [
        { id: 1, type: 'Basic', price: '$99', btnText: 'Buy Basic', included: ['8 creatives', 'Captions & Hashtags', 'Content Calendar'] },
        { id: 2, type: 'Standard', price: '$160', btnText: 'Buy Standard', included: ['12 Creatives', '6 reel branding edits', 'Captions & Hashtags', 'Content Calendar', 'IG highlight icons'] },
        { id: 3, type: 'Premium', price: '$249', btnText: 'Buy Premium', included: ['14 Creatives', '10 reel branding edits', 'Lightroom edits for 10 images', 'Captions & hashtags', 'IG highlight icons', 'Content Calendar',] },
    ]

    const NetworkingCard = [
        { id: 1, type: 'Instagram Trial', price: '$99', btnText: 'Buy', included: ['50-100 targeted followers', 'Duration: 15-20 days'] },
        { id: 2, type: 'Facebook Group Trial', price: '$149', btnText: 'Buy', included: ['60-80 FB group members', 'Duration: 15-25 days'] },
        { id: 3, type: 'LinkedIn Trial', price: '$129', btnText: 'Buy', included: ['80-110 targeted connections', 'Duration: 25-30 days',] },
        { id: 4, type: 'TikTok Trial', price: '$99', btnText: 'Buy', included: ['60-100 targeted followers', 'Duration: 15-25 days',] },
    ];
    
    const GrowthCard = [
        { id: 1, type: 'Instagram Growth', price: '$199', btnText: 'Buy', included: ['Profile optimization', '150-200 targeted followers', 'Duration: 30 days', 'Progress reports'] },
        { id: 2, type: 'Facebook Group Growth', price: '$349', btnText: 'Buy', included: ['210-260 targeted followers', 'Duration: 30 days', 'Progress reports'] },
        { id: 3, type: 'LinkedIn Growth', price: '$299', btnText: 'Buy', included: ['Profile optimization', '290-460 targeted followers', 'Duration: 30 days', 'Progress reports'] },
        { id: 4, type: 'TikTok Growth', price: '$199', btnText: 'Buy', included: ['Profile optimization', '150-200 targeted followers', 'Duration: 30 days', 'Progress reports'] },
    ]

    return (
        <section className={props.className}>
            <section className='sections branding'>
                <h2 className='title'>Branding</h2>
                <p className='content'>If you’re looking to build a reputable social media presence for your social media, it is really important to have your social branding on point. With our branding packages, we plan a comprehensive branding strategy for your socials that sets you apart from others!</p>
                <Card pricingCard={pricingCard} ></Card>
            </section>
            <section className='sections networking'>
                <h2 className='title'>Networking</h2>
                <p className='content'>Creating a strong social media community is important to build credibility online and winning your clients trust. Our organic growth packages help you build a solid network with your fellow coaches, your followers and your clients by using our regular organic engagement strategy.</p>
                <h2 className='sub_heading'>Trial Packages</h2>
                <Card pricingCard={NetworkingCard} ></Card>
            </section>

            <section className='sections growth'>
                <h2 className='sub_heading'>Growth Packages</h2>
                <Card pricingCard={GrowthCard} ></Card>
            </section>

            <section  className='sections sell'>
                <h2 className='title'>Sell</h2>
                <p  className='content'>Once you have built your strong social media network, now it’s time to monetize and sell your products and services to your potential clients by using a custom tailored ad campaign strategy for you. Let’s plan a comprehensive strategy and connect on a call ASAP!</p>
            </section>
            <div className='sections discovery__call'>
                <ButtonStyle text='Book a discovery call now!' variant='fill' color='yellow' ></ButtonStyle>
            </div>

        </section>
    )
}

const SectionStyle = styled(Section)((props) => ({

    '&': {
        maxWidth: '1140px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',

        padding: '40px 10px 60px 10px',
    },
    '& h2.title': {
        fontSize: '56px',
        fontWeight: 800,
        marginBottom: '20px',
    },
    '& p.content': {
        fontSize: '18px',
        padding: '0 0 30px',
        lineHeight: 1.8,
    },
    '& .discovery__call ':{
        display: 'flex',
        justifyContent: 'center',
    },
    '& h2.sub_heading':{
        fontSize: '36px',
    },
    '@media screen and (max-width: 767px) ': {
        
    '& h2.title': {
        fontSize: '40px',
    },
    '& h2.sub_heading':{
        fontSize: '40px',
    }
    }

}));

export default SectionStyle