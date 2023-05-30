import React from 'react'
import styled from 'styled-components'

const AboutPageText = ({ className }) => {
  return (
    <div className={className}>
        <div className='container__div'>
            <div className='heading'>
                <h2>
                    Empowering coaches to transform their social media presence to a revenue generating stream!
                </h2>
            </div>
            <div className="paragraph">
                <p>
                    Acutagramming is a platform where we enable coaches of all kinds, utilize the true potential of social media, by converting their social presence to a powerful tool to generate business for them. We specialize in creating and implementing effective social media marketing strategies that help coaches build a personal brand, form a network and sell to their ideal clients.
                </p>
                <p>
                    We understand the unique challenges that coaches face when it comes to marketing themselves online. We know that building a strong online presence takes time, effort, expertise, and so many coaches operating online, standing out can be a difficult task. We take that stress from your life and build a credible social presence so you won’t need to worry about it anymore!
                </p>
            </div>
        </div>
    </div>
  )
}

export const AboutPageTextStyle = styled(AboutPageText)((props) => ({
    "&": {
        padding: '60px 0px',
        display: 'flex',

        ".container__div": {
            maxWidth: '1140px',
            padding: '10px',
            margin: 'auto',
            fontFamily: '"Inter", Sans-serif',

            ".heading": {
                marginBottom: '20px',

                "h2": {
                    color: '#323232',
                    fontSize: '50px',
                    fontWeight: '800',
                    lineHeight: '1em',
                }
            },

            ".paragraph": {
                paddingTop: '10px',
                color: '#505050',
                fontSize: '18px',
                fontWeight: '400',

                "p": {
                    marginBottom: '20px',
                    lineHeight: '1.8',
                }
            }
        }
    },
    '@media (max-width: 1024px)': {
        "&": {
            ".container__div .heading h2": {
                fontSize: '44px'
            }
        }
    },
    '@media (max-width: 767px)': {
        "&": {
            ".container__div .heading h2": {
                fontSize: '30px'
            }
        }
    }
}))