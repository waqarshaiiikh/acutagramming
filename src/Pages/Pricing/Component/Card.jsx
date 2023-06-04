import React from 'react'
import ButtonStyle from '../../CommonComponents/ButtonComponent'
import { FaCheck } from 'react-icons/fa'
import styled from 'styled-components'

const Card = ({ className, pricingCard }) => {
    return (
        <div className={className}>
            <div className='price'>
                {pricingCard.map(card => (
                    <div className='card' key={card.id}>
                        <div className='price-description'>
                            <div className='wrapper__price'>
                                <div className='priceType'> <h2>{card.type}</h2></div>
                                <h2>From</h2>
                                <div className='priceText'> <h2>{card.price}</h2></div>
                                <div className='btn'>
                                    <ButtonStyle text={card.btnText} variant='fill' color='black'  onClick={()=>{}} />
                                </div>
                            </div>
                        </div>
                        <div className='includes'>
                            <h2>WHAT'S INCLUDED</h2>
                            <div className='include__main__div'>
                                {card.included.map((included, id) => (<div className='include--item' key={id + 1}>
                                    <span className='tick'><FaCheck color='#5DD85F' /></span><span className='include__item--item'>{included}</span>
                                </div>))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const cardStyle = styled(Card)((props) => ({

    '& .price': {
        display: 'flex',
        justifyContent: 'center',
        padding: '60px 0',
        gap: '10px',
        '& .card ': {
            flex: '0 1 300px',
            borderStyle: 'solid',
            borderWidth: '1px 1px 1px 1px',
            borderColor: '#DEDEDE',
            borderRadius: '12px',
            '& .price-description': {
                padding: '30px 30px 30px 30px',
                height: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'space-between',

                '& .wrapper__price': {
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'baseline',
                    gap: '20px',
                    '> h2': {
                        fontSize: '17px',
                        color: '#656565',
                        fontWeight: '500',
                    },
                    '> .priceType h2 ': {
                        fontWeight: '500',
                        fontSize: '20px',
                        color: '#232323',
                    },
                    '> .priceText h2': {
                        fontSize: '34px',
                        fontWeight: 800,
                        color: '#232323',
                    },
                    '> .btn': {
                        // padding: '10px 0px',
                        // alignSelf: 'center',
                        flexBasis: '80%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'end',
                        '> button': {
                            width: '100%',
                            fontSize: '15px',
                        }
                    }
                },
            },
            '& .includes': {
                borderStyle: 'solid',
                borderWidth: '1px 0 0 0',
                borderColor: '#DEDEDE',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'baseline',
                gap: '20px',
                margin: 'auto',
                padding: '30px',
                '> h2': {
                    color: '#232323',
                    fontSize: '14px',
                    fontWeight: 500,
                },
                '& .include__main__div': {
                    flex: '1', // Expand to fill remaining space
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'baseline',
                    gap: '10px',
                    '> .include--item': {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        '> .include__item--item': {
                            paddingLeft: '10px',
                            lineHeight: 1.5,
                        },
                    }
                },
            },
        },
    },
    '@media screen and (max-width: 767px) ': {
        '& .price':{
            flexDirection: 'column',
            gap:'30px',
            '& .card > .price-description ':{

                '> .wrapper__price ':{
                    width: '100%',
                    '> .btn':{
                        width: '100%',
                        display: 'flex',
                        flexBasis: '100%',
                        justifyContent: 'center',
                        '> button ': {
                            width: '80%'
                        }
                    },
                },
            },
        }
    },


}));

export default cardStyle