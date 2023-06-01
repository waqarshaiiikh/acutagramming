import React from 'react'
import styled from 'styled-components'

const CompanyMoto = ({ className }) => {
    return (
        <div className={className}>
            <b className='title'>What We Do</b>
            <h2>We help coaches <span className='whatWeDoNext'> build a personal brand, form a network, and sell to their ideal clients. </span></h2>
            <div className='CompanyMoto-heading'>
                <h2>Create a personal brand:</h2>
            </div>
            <p className='paragraph'>
                Are you struggling to build a strong social media presence and create a personal brand for your business? Look no further! With our <i>brand</i> services we help you create a unique visual presence on social platforms using different trending content formats i-e infographics, reels, stories. This will establish you as an authority in your field and build trust with your followers.
                <br />
                <br />
                An aesthetically appealing branding on social media separates you from your competitors and gives you an edge and you can elevate your social presence.
            </p>
            <div className='CompanyMoto-heading'>
                <h2>Form a network:</h2>
            </div>
            <p className='paragraph'>
                <span>
                    Our network services help you build a strong community on social media platforms to build social credibility. We help you establish relationship with your fellow coaches on social media who share your interests and goals. This can lead to collaborations, partnerships, and even referrals.
                </span>
                <br />
                <br />
                <span>
                    We help you connect with your followers to build a community around your brand. It helps you establish yourself as an approachable and knowledgeable coach for your followers.
                </span>
                <br />
                <br />
                <span>
                    It is so important to build healthy relationships with your clients through social media and we help you with that. We help you learn how to use social media to check in with your clients, offer support, and share their successes. By doing so, you show that you care about their progress and are invested in their success.
                </span>
            </p>
            <div className='CompanyMoto-heading'>
                <h2>Sell to your idea clients:</h2>
            </div>
            <p className='paragraph'>
                With our sell services you finally start selling your coaching services to your ideal clients through social media and can turn your social media into a revenue generating stream for your business.
                <br />
                <br />
                This is the final stage after building a social brand, creating a follower community and then at this stage you start selling. Using our highly optimized Facebook, Instagram and TikTok ad campaigns, we help you connect with your ideal clients!
            </p>
        </div>
    )
}

const CompanyMotoStyled = styled(CompanyMoto)((props) => ({
    '&': {
        maxWidth: '1140px',
        margin: 'auto',
        padding: '80px 0px',
        '& .title': {
            color: props.theme.yellow,
            fontSize: '20px',
            fontWeight: 600,
            letterSpacing: '1px',
            display: 'block',
            padding: '10px 0'
        },
        h2: {
            fontSize: '50px',

        },
        '& .whatWeDoNext': {
            textDecoration: 'underline',
            textDecorationColor: props.theme.yellow
        },
        '& .CompanyMoto-heading': {
            padding: '40px 0 20px 0',
            h2: {
                fontSize: '26px',
            }
        },
        '& .paragraph': {
            fontSize: '18px',
            margin: '0 0 20px',
            color: '#505050',
            textAlign: 'justify',
            textJustify: 'inter-word',
            lineHeight: '25px',
        }
    },

}));

export default CompanyMotoStyled