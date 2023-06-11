import logo from '../../assets/logo.png'
import styled from 'styled-components'
import ButtonStyle from './ButtonComponent'
import { Link } from 'react-router-dom'
import MenuStyle from './MenuBar'
import { useState } from 'react'
import { WorkLink } from '../Work/Work'
import { AboutLink } from '../About/About'
import { PricingLink } from '../Pricing/Pricing'

const Header = ({ className }) => {

    const [menu, setMenu] = useState(false);

    const openSideBar = () => {
        setMenu(true);
    }


    return (
        <header className={className}>
            <div className='margin__auto'>
                <div className='logo'>
                    <Link to='/'>
                        <img alt='logo' src={logo} />
                    </Link>
                </div>

                <div className="tabs">
                    <div className='tabs__item'>
                        <PricingLink />
                    </div>
                    <div className='tabs__item'>
                        <WorkLink />
                    </div>
                    <div className='tabs__item'>
                        <AboutLink />
                    </div>
                    <div className='tabs__item__menu'>
                        <button className='menu' onClick={openSideBar}>
                            <span className='line'></span>
                            <span className='line'></span>
                            <span className='line'></span>
                        </button>
                    </div>
                    <div className='tabs_item_btn' >
                        <div className='schedule-btn'>
                            <ButtonStyle text='Schedule a Call' variant='fill' color='yellow' ></ButtonStyle>
                        </div>
                    </div>
                </div>
            </div>

            {menu && <MenuStyle menu={menu} setMenu={setMenu} />}

        </header>
    )
}

export const HeaderStyle = styled(Header)((props) => ({
    '& .margin__auto': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        maxWidth: '1140px',
        margin: 'auto',
        padding: '25px 0px 0px 0px',
        '& .tabs': {
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            '& .tabs__item a': {
                textDecoration: 'none',
                color: props.theme.tabsColor,
                fontWeight: '500',
                letterSpacing: '0.5px',
            },
            '& .tabs__item a:hover': {
                opacity: 0.8,
            },
            '& .tabs__item__menu': {
                display: 'none',
            },
            '& .tabs_item_btn':{
                padding: '10px 25px 10px 12px',
                '.schedule-btn > button ':{
                    height: '40px',
                    paddingTop: '10px',
                    fontWeight: 500,
                    color: '#2B2B2B'
                }
            }

        },
        '& .logo':{
            padding : '10px',
        }
    },
    '@media screen and (max-width: 767px) ': {
        '& .tabs__item, .tabs_item_btn': {
            display: 'none',
        },
        '& .margin__auto .logo':{
            flexBasis: '50%',
            display:'flex',
            justifyContent: 'center',
        },
        '& .margin__auto .tabs': {
            gap: 0,
            padding: '10px',
            flexBasis: '50%',
        },
        '& .margin__auto': {
            alignItems: 'stretch',
            justifyContent:'unset',
            flexBasis:1,
            '.tabs':{
                padding: '10px',
                display: 'flex',
                justifyContent: 'end',
            },
            '.tabs .tabs__item__menu': {
                display: 'block',
                paddingBottom:'10px',
            },
        },
    },
    '@media screen and (min-width: 768px) and (max-width: 1023px)': {
        '& .margin__auto .tabs':{
            alignItems: 'end',
            gap: '20px',
            '& .tabs_item_btn':{
                padding: '10px 25px 0px 12px',
            }   
        }
    },
    /**common css for both tablet and mobile */
    '@media (max-width: 1023px) ': {
        '& .tabs__item': {
            display: 'none',
        },
        '& .margin__auto .tabs .tabs__item__menu': {
            display: 'block',
        },
        '& .tabs__item__menu .menu': {
            width: '45px',
            borderRadius: '3px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '8px',
            cursor: 'pointer',

        },
        '& .tabs__item__menu .menu .line': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: '1px',
            width: '100%',
            display: 'block',
        }
    },


}))