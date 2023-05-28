import logo from '../../assets/logo.png'
import styled from 'styled-components'
import ButtonStyle from './ButtonComponent'
import { Link } from 'react-router-dom'

const Header = ({ className }) => {

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
                        {/* menu icon */}
                        <button className='menu'>
                            <span className='line'></span>
                            <span className='line'></span>
                            <span className='line'></span>
                        </button>
                    </div>
                    <div>
                        <div className='schedule-btn'>
                            <ButtonStyle text='Schedule a Call' variant='fill' color='yellow' ></ButtonStyle>
                        </div>
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
        alignItems: 'center',
        maxWidth: '1140px',
        margin: 'auto',
        padding: '25px',
        '& .tabs': {
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            '& .tabs__item a': {
                textDecoration: 'none',
                color: props.theme.tabsColor,
                fontWeight: '500',
            },
            '& .tabs__item a:hover': {
                opacity: 0.8,
            },
            '& .tabs__item__menu': {
                display: 'none',
            }
        }
    },
    '@media screen and (max-width: 767px) ': {
        '& .tabs__item, .schedule-btn': {
            display: 'none',
        },
        '& .margin__auto .tabs':{
            gap:0,
        }
    },
    '@media screen and (min-width: 768px) and (max-width: 1023px)': {
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
        },
        '& .tabs__item__menu .menu .line': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: '1px',
            width: '100%',
            display: 'block',
        }
    },


}))