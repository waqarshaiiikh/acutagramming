import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import styled from 'styled-components'
import ButtonStyle from './ButtonComponent'
import { Link } from 'react-router-dom'
import {IoMenuOutline} from 'react-icons/all'

const Header = ({className}) => {
    
    return (
        <header className={className}>
            <div className='margin__auto'>
            <div className='logo'>
                <img alt='logo' src={logo} />
            </div>

            <div className="tabs">
                <div className='tabs__item'>
                    <Link >Pricing</Link>
                </div>
                <div className='tabs__item'>
                    <Link >Work</Link>
                </div>
                <div className='tabs__item'>
                    <Link >About</Link>
                </div>
                <div className='tabs__item__menu'>
                    <div className='menu' >
                        <IoMenuOutline />
                    </div>
                </div>
                <div className='schedule-btn'>
                    <ButtonStyle text='Schedule a Call' variant='fill' color='yellow' ></ButtonStyle>
                </div>
            </div>
            </div>
        </header>
    )
}


export default Header


export const HeaderStyle = styled(Header)((props) => ({
    '& .margin__auto': {
        display: 'flex',
        justifyContent: 'space-between',
        // alignItems: 'center',
        // height: '78px',
        maxWidth: '1140px',
        margin: 'auto',
        paddingTop: '25px',
        '& .logo': {
            padding: '10px'
        },
        '& .tabs': {
            display: 'flex',
            alignItems: 'baseline',
            // alignItems: 'center',
            padding: '10px',
            gap: '2rem',
            '& .tabs__item a':{
                textDecoration: 'none',
                color: props.theme.tabsColor,
                fontWeight: '500',
            },
            '& .tabs__item a:hover':{
                opacity:0.8,
            },
            '& .tabs__item__menu': {
                display: 'none',
                fontSize: '30px'
            }
        }
    },
    '@media (max-width: 1030px)': {
        '& .tabs__item': {
            display: 'none',
        },
        '& .margin__auto .tabs .tabs__item__menu': {
            display: 'block',
        }
    }


}))