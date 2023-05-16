import React from 'react'
import logo from '../../../assets/logo.png'

const Header = () => {
  return (
    <div className='home-page-main-div'>
        <header className='Header'>
            <div className='logo'>
                <img alt='logo' src={logo} />
            </div>
            
            <div className="normal-btn">
                <div className='pricing-btn'>
                    <button >Pricing</button>
                </div>
                <div className='work-btn'>
                    <button >Work</button>
                </div>
                <div className='About-btn'>
                    <button >Work</button>
                </div>
            </div>
            <div className='schedule-btn'>
                    <button> Schedule a Call</button>
            </div>


        </header>
    </div>

  )
}

export default Header