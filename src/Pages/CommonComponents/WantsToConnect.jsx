import React from 'react'
import styled from 'styled-components'
import ButtonStyle from './ButtonComponent';

const WantsToConnect = ({ className }) => {
       
    const handleOpen = () => {
        window.open('https://vf51aeockks.typeform.com/to/LbutrF47');
    }

    return (
        <div className={className}>
            <div className='margin-auto'>
                <h2>Want to connect?</h2>
                <div className='wrapper'>
                    <ButtonStyle text='Discuss a project' variant='fill' color='yellow' ></ButtonStyle>
                    <p>or</p>
                    <ButtonStyle text='Get FREE Social Media Roadmap' variant='outline' color='none' onClick={handleOpen} ></ButtonStyle>
                </div>

            </div>
        </div>
    )
}

const WantsToConnectStyle = styled(WantsToConnect)((props) => ({

    '&': {
        backgroundColor: '#F9FAFB',
        padding: '8rem 0rem 8rem 0rem',
        '& .margin-auto': {
            maxWidth: '1140px',
            margin: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            h2: {
                fontSize: '40px',
                fontWeight: 600,
                color: '#2F2F2F'
            },
            '& .wrapper': {
                display: 'flex',
                gap: '2rem',
                alignItems: 'center',
            },

        }
    }, '@media screen and (max-width: 767px) ': {
        '& .wrapper': {
            flexDirection: 'column',
            gap: '5px',
        }
    },

}));

export default WantsToConnectStyle