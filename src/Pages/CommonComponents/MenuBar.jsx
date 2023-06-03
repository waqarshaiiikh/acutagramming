import React from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components';
import { RxCross1 } from 'react-icons/all'
import { Link } from 'react-router-dom';
import { AboutLink } from '../About/About';
import { WorkLink } from '../Work/Work';
import { PricingLink } from '../Pricing/Pricing';

const MenuBar = ({className, menu, setMenu}) => {

    const handleClose = () => {
        setMenu(false);
    }

    return createPortal(
        <div className={className}>
            <div className='menu'>
                <div className='menu__section'>
                    <button className='menu__section--button' onClick={handleClose} >
                        <RxCross1 />
                    </button>
                </div>
                <div className='tabs__item'>
                    <PricingLink/>
                </div>
                <div className='tabs__item'>
                    <WorkLink/>
                </div>
                <div className='tabs__item'>
                    <AboutLink/>
                </div>
            </div>
            <div className='transparent-div' onClick={handleClose}></div>
        </div>
        , document.getElementById('menu'));
}

const MenuStyle = styled(MenuBar)((props) => ({
    '&': {
        display: 'flex',
    },
    '& .menu, transparent-div':{
        // transition: 'transform 3s ease-out', // Adding the transition property
        // transform: props.menu ? 'translateX(0)' : 'translateX(-100%)', // Apply the transformation based on menu state    
    },
    '& .menu ': {
        border: '1px solid #f7f7f7',
        backgroundColor: '#f7f7f7',
        position: 'fixed',
        top: 0,
        left: 0,
        minWidth: '350px',
        width: '40vw',
        height: '100vh',
        zIndex: 1,
        '& .menu__section': {
            padding: '4px',
            height: '90px',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            '& .menu__section--button': {
                margin: '12px',
                padding: '8px',
                width: '45px',
                height: '45px',
                border: '1px solid rgba(0,0,0,.5)',
                backgroundColor: 'transparent',
                borderRadius: '3px',
                color: 'rgba(51, 51, 51, 1)',
                cursor: 'pointer'
            },
            svg: {
                fontSize: '15px',
            }
        },
        '& .tabs__item':{
            padding: '10px 15px',
        },
        '& .tabs__item a': {
            textDecoration: 'none',
            color: props.theme.tabsColor,
            fontWeight: '500',
        },
        '& .tabs__item a:hover': {
            opacity: 0.8,
        },

    },
    '& .transparent-div': {
        position: 'fixed', 
        transition: 'width 0.5s', // Adding the transition property
        width: props.menu ? '100vw' : '0', // Apply the width based on menu state
        height: '100vh',
        top: 0,
        backgroundColor: 'rgba(51,51,51,.5)',
        opacity: '0.5',
    },
   
}));

export default MenuStyle;