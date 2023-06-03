import React from 'react'
import styled from 'styled-components';
import ButtonStyle from '../../CommonComponents/ButtonComponent';

const Branding = (props) => {

    const pricingCard = [
        { type: 'Basic', price: '$99', btnText: 'Buy Basic', included: ['8 creatives', 'Captions & Hashtags', 'Content Calendar'] },
        { type: 'Standard', price: '$160', btnText: 'Buy Standard', included: ['12 Creatives', '6 reel branding edits', 'Captions & Hashtags', 'Content Calendar', 'IG highlight icons'] },
        { type: 'Premium', price: '$249', btnText: 'Buy Premium', included: ['14 Creatives', '10 reel branding edits', ' Lightroom edits for 10 images', 'Captions & hashtags', ' IG highlight icons', 'Content Calendar',] },
    ]

    return (
        <div className={props.className}>
            <h2>Branding</h2>
            <p>If you’re looking to build a reputable social media presence for your social media, it is really important to have your social branding on point. With our branding packages, we plan a comprehensive branding strategy for your socials that sets you apart from others!</p>
            <div className='price'>
                {pricingCard.map(card => (
                    <div className='card'>
                        <div className='price-description'>
                            <div className='wrapper__price'>
                                <div className='priceType'> <h2>{card.type}</h2></div>
                                <h2>From</h2>
                                <div className='price'> <h2>{card.price}</h2></div>
                                <div className='btn'>
                                    <ButtonStyle text={card.btnText} variant='fill' color='black' />
                                </div>
                            </div>
                        </div>
                        <div className='includes'>
                            <h2>WHAT'S INCLUDED</h2>
                            {card.included.map(included => (<div className='include--item'><span>{included}</span></div>))}
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

const BrandingStyle = styled(Branding)((props) => ({
    '&': {
        maxWidth: '1140px',
        margin: 'auto',
        padding: '6rem 0',
        h2:{
            fontSize: '56px',
            marginBottom: '20px',
        },
        p:{
            margin: '0 0 20px',
            padding: '0 0 30px',
        },

        '& .price-description': {
            borderStyle: 'solid',
            borderWidth: '0px 1px 1px 1px',
            borderColor: '#DEDEDE',
            color: '#232323',
            padding: '30px',
            '& .wrapper__price': {
                display: 'flex',
                margin: '0px 10px 0px 20px',
                flexDirection: 'column',
                justifyContent: 'center',

                '> .priceType h2, > h2': {
                    fontSize: '20px',
                    lineHeight: '50px',
                    fontWeight: '500',
                },
                '> .price h2': {
                    fontSize: '34px',
                    lineHeight: '50px',
                    fontWeight: 800,
                },
                '> .btn': {
                    padding: '10px 0px',
                }
            },
        },
        '& .includes': {
            borderStyle: 'solid',
            borderWidth: '0px 1px 1px 1px',
            borderColor: '#DEDEDE'
        },
        '& .price': {
            display: 'flex',
            gap: '2rem',
            padding: '0 80px',
        },
        '& .card ': {
            width: '30%',
        }
    },

}));

export default BrandingStyle