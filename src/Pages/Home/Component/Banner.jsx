import React from 'react'
import styled from 'styled-components'
import ButtonStyle from '../../CommonComponents/ButtonComponent'
import heroImage from '../../../assets/hero-image.png';

const BannerComponent = ({ className }) => {
    
    
    const handleOpen = () => {
        window.open('https://vf51aeockks.typeform.com/to/LbutrF47');
    }

    return (
        <section className={className}>
            <div className='Banner__section'>
                <div className='Banner-title'>
                    <p>
                        Struggling to grow your social presence while managing a full time coaching business?
                    </p>
                </div>
                <div className='Banner-advertising-text'>
                    <h1>
                        We help coaches turn their social media presence to a new revenue stream!
                    </h1>
                </div>
                <div className='Banner-get-free-Button' >
                    <ButtonStyle text='Get FREE Social Media Roadmap' variant='fill' color='yellow' onClick={handleOpen} ></ButtonStyle>
                </div>

            </div>

            <div className='Banner__section Banner-image'>
                <div className='img' />
                <img src={heroImage} alt='Banner-img' />
            </div>
        </section>
    )
}

const Banner = styled(BannerComponent)((props) => ({
    '&': {
        maxWidth: '1140px',
        margin: 'auto',
        display: 'flex',
        padding: '70px 0px 40px 0px',

        // '.Banner__section': {
        // },

        '& .Banner__section:nth-child(1)': {

            width: '64.209%',
            // flexGrow:1,
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            padding: '10px',
            color: '#323232',


            '& .Banner-advertising-text h1': {
                fontSize: '60px',
                fontWeight: 800,
                lineHeight: 1,
            },
            '& .Banner-title > p': {
                fontSize: '17px',
                fontWeight: 500,
                color: '#6B6B6B',
                lineHeight: 1,
            }
            ,
            '& .Banner-get-free-Button > button ': {
                fontSize: '16px',
                color: '#2B2B2B',
                fontWeight: 500,
                lineHeight :1,

            },

        },
        '& .Banner__section:nth-child(2)': {
            // flexGrow:1,
            width: '35.123%',
            display: 'flex',
            flexWrap: 'wrap',
            // alignContent: 'flex-start',
            
        },
        '& .img': {
            width: '100%',
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition:'center',
            display: 'inline',
        },
        '& img':{
            display: 'none',
        }
    },
    '@media screen and (max-width: 767px) ': {
        '&': {
            flexDirection: 'column',
            padding: '95px 10px 50px',
            gap: '20px',
        },
        '& .Banner__section:nth-child(1)':{
            padding: '0px',
        },
        '& .Banner__section:nth-child(1) .Banner-advertising-text h1': {
            fontSize: '40px',
        },
        '& .Banner__section:nth-child(1), .Banner__section:nth-child(2)': {
            width: '100%'
        },
        '& .Banner-get-free-Button': {
            display: 'none'
        },
        '& .Banner__section:nth-child(2) .img':{
            display: 'none',
        },
        '& .Banner__section:nth-child(2) img':{
            display: 'block',
            width: '100%',
            height: 'auto',
            // backgroundImage: `url(${heroImage})`,
            // backgroundSize: 'cover',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
            verticalAlign: 'middle',
            padding: '20px 0'
        }
    },
    '@media screen and (min-width: 768px) and (max-width: 1023px)': {
        '& .Banner__section:nth-child(1) .Banner-advertising-text h1': {
            fontSize: '45px',
        },
    },


}))

export default Banner;