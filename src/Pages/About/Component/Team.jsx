import React from 'react'
import styled from 'styled-components'
import male from '../../../assets/team/vector-1024x1024.jpg'
import usama from '../../../assets/team/usama.jpg'
import saad from '../../../assets/team/saad.jpg'
import amna from '../../../assets/team/amna.jpg'
import hassan from '../../../assets/team/hassan.jpg'
import mahrosh from '../../../assets/team/mahrosh-1.jpg'
import raja from '../../../assets/team/raja.jpg'

const Team = ({ className }) => {
  return (
    <div className={className}>
        <div className='container__div'>
            <div className="heading">
                <h2>Our Team</h2>
            </div>
            <div className="section">
                <div className="card">
                    <div className="image__container">
                        <img src={saad} />
                    </div>
                    <div className="name">
                        <h2>Saad Rajpoot</h2>
                    </div>
                    <div className="title">
                        <h2>(Founder & CEO)</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="image__container">
                        <img src={male} />
                    </div>
                    <div className="name">
                        <h2>Mehtab</h2>
                    </div>
                    <div className="title">
                        <h2>(Business Development Manager)</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="image__container">
                        <img src={usama} />
                    </div>
                    <div className="name">
                        <h2>Usama Khalid</h2>
                    </div>
                    <div className="title">
                        <h2>(Social Media Manager)</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="image__container">
                        <img src={male} />
                    </div>
                    <div className="name">
                        <h2>Aryan</h2>
                    </div>
                    <div className="title">
                        <h2>(Graphic Design Lead)</h2>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="card">
                    <div className="image__container">
                        <img src={amna} />
                    </div>
                    <div className="name">
                        <h2>Amna Adnan</h2>
                    </div>
                    <div className="title">
                        <h2>(Outreach Coordinator)</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="image__container">
                        <img src={hassan} />
                    </div>
                    <div className="name">
                        <h2>Hassan Israr</h2>
                    </div>
                    <div className="title">
                        <h2>(Content Specialist)</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="image__container">
                        <img src={mahrosh} />
                    </div>
                    <div className="name">
                        <h2>Mahrosh Jafri</h2>
                    </div>
                    <div className="title">
                        <h2>(Community Manager)</h2>
                    </div>
                </div>
                <div className="card">
                    <div className="image__container">
                        <img src={raja} />
                    </div>
                    <div className="name">
                        <h2>Raja Aakash</h2>
                    </div>
                    <div className="title">
                        <h2>(Lead Developer)</h2>
                    </div>
                </div>
            </div>
            <div className="section"></div>
        </div>
    </div>
  )
}

export const TeamStyle = styled(Team)((props) => ({
    "&": {
        padding: '40px 0',
        display: 'flex',

        ".container__div": {
            maxWidth: '1140px',
            margin: 'auto',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: '"Inter", Sans-serif',

            ".heading": {
                marginBottom: '20px',
                textAlign: 'center',

                "h2": {
                    color: '#323232',
                    fontSize: '56px',
                    fontWeight: '600',
                    lineHeight: '1em',
                }
            },

            ".section": {
                paddingTop: '40px',
                display: 'flex',

                ".card": {
                    width: '25%',
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                    padding: '10px',
                    color: '#323232',

                    ".image__container": {
                        marginBottom: '20px',
                        width: '100%',

                        "img": {
                            borderRadius: "16px",
                            width: "100%",
                            height: "auto"
                        }
                    },

                    ".name": {
                        marginBottom: "20px",
                        textAlign: "center",

                        "h2": {
                            fontSize: "28px",
                            fontWeight: '500',
                            lineHeight: '1em'
                        }
                    },

                    ".title": {
                        textAlign: "center",

                        "h2": {
                            fontSize: "18px",
                            fontWeight: '400',
                            lineHeight: '1em'
                        }
                    }
                }

            }
        }
    },
    '@media (max-width: 767px)': {
        "&": {
            ".container__div .section": {
                flexDirection: "column",

                ".card": {
                    width: '100%'
                }
            }
        }
    }
}))