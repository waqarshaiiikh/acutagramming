import React from 'react'
import MelissaVideo from '../../../assets/Melissa-Lin-Certified-Business-Coach.mp4';
import Rebacca from '../../../assets/Customers/Rebecca.mp4';
import kahlen from '../../../assets/Customers/Kahlen.mp4';
import karishma from '../../../assets/Customers/Karishma-new.jpg';
import boriana from '../../../assets/Customers/Boriana-new.jpg';
import styled from 'styled-components';
import ButtonStyle from '../../../Pages/CommonComponents/ButtonComponent';

const MainSection = (props) => {

    const customersArray = [
        { id: 1, name: 'Melissa Lin', occupation: '(Business Coach)', video_src: MelissaVideo, description: `Acutagramming is happy to share it's experience in helping Melissa Lin expand her online coaching business through social media. When Melissa started working with us, she had her branding well set and on point but she was struggling to grow a follower community on Instagram. Using our community engagement growth strategies on Instagram, we were able to help Melissa grow 5K+ highly targeted organic followers within the first 6 months. She has been using Acutagramming's community growth services for more than a year now!` },
        { id: 2, name: 'Rebecca Warnock', occupation: '(Life Coach)', video_src: Rebacca, description: `Rebecca Warnock is a certified life coach. She was referred by one of our old clients when she was in need of a professional team that could help her with social media management. We provided her with a comprehensive social media marketing roadmap to get started and helped her get her first 500 followers on TikTok and Instagram in the very first month. We helped her with branding, growth and networking using our growth model.` },
        { id: 3, name: 'Kahlen Branning', occupation: '(Fitness Coach)', video_src: kahlen, description: `Kahlen has been one of our best clients. He is a personal trainer and online fitness coach. In the mid of 2022, due to some changes to Instagram algorithm, Kahlen's was stagnant. Then he got in touch with Acutagramming so we could help him improve his Instagram growth. We helped him overcome his challenges with the algorithm changes and his engagement rate improved by 6.7% within the first month. We also helped Kahlen with organic DM outreach to generate leads from Instagram which proved to be one of the successful campaigns he tried for his Instagram.` },
        { id: 4, name: 'Karishma', occupation: '(Business Coach)', img_src: karishma, description: `We are so glad to share how we helped Karishma with her social accounts. Karishma is a professional business coach from Taxes, US and in the past due to some reason her FB and IG accounts got blocked so she had to start from scratch. We helped her build her social media presence from scratch using our custom social media marketing campaign that we designed specifically for her. Now, she's at a point where she is getting inquiries from the clients who want to work with her.` },
        { id: 5, name: 'Boriana Valentinova', occupation: '(Business Coach)', img_src: boriana, description: `Boriana Valentinova is a business consultant from London, UK. LinkedIn lead generation is very powerful for business coaches like Boriana and this is where we helped her. She had a very strong presence on LinkedIn and we helped them scale her LinkedIn presence more and start selling her services to her clients. We helped her connect and sell to her target clients using our LinkedIn lead generation strategies.` },
    ];

    return (
        <section className={props.className}>
            <div className='Explore'> <h2>Explore our past and present clients</h2> </div>
            <div className='customers'>
                {
                    customersArray &&
                    customersArray.map(
                        (customer, i) => (
                            <div className={`customer`} key={customer.id}>
                                <div className='item video'>

                                    {customer?.video_src && <video controls > <source src={customer.video_src} type="video/mp4" /> </video>}
                                    {customer?.img_src && <img src={customer.img_src} alt='customer pic' />}

                                </div>
                                <div className='item description'>
                                    <div className='name'> <h2>{customer.name}</h2> </div>
                                    <div className='occupation'><h2>{customer.occupation}</h2></div>
                                    <div className='detail'><p>{customer.description}</p></div>
                                    <div> <ButtonStyle text='Schedule a Call' variant='fill' color='black' ></ButtonStyle>  </div>
                                </div>
                            </div>
                        ))
                }
            </div>

        </section>
    )
}

const MainSectionStyle = styled(MainSection)((props) => ({
    '&': {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        maxWidth: '1140px',
        margin: 'auto',
        padding: '10px',
        marginBottom: '90px',
        marginTop: '40px',
        '> .Explore': {
            h2: {
                fontSize: '48px'
            }
        },
        '& .customers': {
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            '> .customer': {
                display: 'flex',
                gap: '1rem',
                '> .item:nth-child(1)': {
                    backgroundColor: 'black',
                    padding: '20px',
                    video: {
                        maxWidth: '297px'
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    width: '30%',
                    '> *': { width: '100%', maxWidth: '300px' },
                    '> video': { aspectRatio: '0.5625', }

                },
                '> .item:nth-child(2)': {
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '10px 30px 10px 40px',
                    gap: '1rem',
                    '> .name h2': {
                        fontSize: '38px',
                        fontWeight: 800,
                        color: '#323232',
                        textDecoration: 'underline',
                        textDecorationColor: '#FFC94E',
                    },
                    '> .occupation h2': {
                        fontSize: '22px',
                        fontWeight: 600,
                    },
                    '> .detail p': {
                        fontSize: '20px',
                        lineHeight: '33px',
                        fontWeight: 400,
                    }
                },
            },
            '> .customer:nth-child(even)': {
                flexDirection: 'row-reverse'
            }
        },
    },
    '@media screen and (max-width: 767px) ': {
        '& .customers > .customer:nth-child(even)':{
            flexDirection: 'column-reverse',
        },
        '& .customers > .customer':{
                
                flexDirection: 'column',
                '> .item:nth-child(1)': {
                    padding: '10px',
                    video: {
                        maxWidth: '100%'
                    },
                    width: '100%',
                    '> *': { width: '100%', maxWidth: '100%'},
                },
                '> .item:nth-child(2)': {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px 0px 10px',
                    gap: '1rem',
                    '> .name h2': {
                        fontSize: '34px',
                        fontWeight: 800,
                    },
                    '> .occupation h2': {
                        fontSize: '26px',
                        fontWeight: 600,
                    },
                    '> .detail p': {
                        fontSize: '18px',
                        lineHeight: '1.3em',
                        fontWeight: 400,
                    }
                },

        }
    },
    '@media screen and (min-width: 768px) and (max-width: 1023px)': {
        '& .customers > .customer > .item:nth-child(2) > .name h2': {
            fontSize: '28px',
        },
        '& .customers > .customer > .item:nth-child(2) > .occupation h2': {
            fontSize: '22px',
        },
        '& .customers > .customer > .item:nth-child(2) > .detail p': {
            fontSize: '16px',
            lineHeight: '1.3em',

        }
    },


}));

export default MainSectionStyle