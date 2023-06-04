import React from 'react'
import Quotation from '../../../assets/Quotation-white.png'
import Video from '../../../assets/Melissa-Lin-Certified-Business-Coach.mp4'
import styled from 'styled-components'
import ButtonStyle from '../../CommonComponents/ButtonComponent'
import { useNavigate } from 'react-router-dom'

const CustomerExperience = ({ className }) => {
  const nav = useNavigate();
  const handleNavigate = ()=>{
    nav('/Work');
  }
  return (
    <section className={className}>
      <div className='wrapper__video'>

        <div className='customer-experience-video'>
          <video controls> <source src={Video} type="video/mp4" /> </video>
        </div>

        <div className='video__description'>
          <div className='customer-experience-quotation'><img src={Quotation} alt="quotation-image" /></div>
          <div className='customer-experience-text'><p>I have been working with Acutagramming for more than a year now and my experience with them has just been above and beyond. They're so pleasant to work with ...</p></div>
          <div className='customer-experience-customer'><p className='name'>Melissa Lin</p><p className='occupation'>{'(Business Coach)'}</p></div>
          <div className='customer-experience-btn'>
            <ButtonStyle text='View more examples' variant='fill' color='black' onClick={handleNavigate} ></ButtonStyle>
          </div>
        </div>

      </div>
    </section>
  )
}

const CustomerExperienceStyle = styled(CustomerExperience)(props => ({

  '&': {
    wordWrap: 'breakWord',
    backgroundColor: props.theme.yellow,
    display: 'flex',
    margin: '6rem 2rem 4rem 2rem',
    borderRadius: '25px',
    '& .wrapper__video': {
      maxWidth: props.theme.maxWidth,
      margin: 'auto',
      display: 'flex',
      padding: '60px 10px',
    }
  },

  '& .video__description': {
    padding: '10px 30px 10px 40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    '& .customer-experience-text': {
      fontSize: '30px',
      fontWeight: '400px',
      lineHeight: 2,
    },
    '& .customer-experience-customer': {
      lineHeight: 1,
      color: '#323232',

      '& .name': {
        fontSize: '40px',
        fontWeight: 600,
      },
      '& .occupation': {
        fontSize: '22px',
      },
      '& .occupation, .name': {
        paddingBottom: '10px',
      },
    },
    '& .customer-experience-btn button': {
      fontSize: '16px',
    },
  },
  '& .customer-experience-video': {
    backgroundColor: 'black',
    padding: '5px 10px',
    video: {
      maxWidth: '297px'
    }
  },
  '@media screen and (min-width: 768px) and (max-width: 1023px)': {
    '& .video__description': {
      '& .customer-experience-text': {
        fontSize: '18px',
        fontWeight: '400px',
        lineHeight: 2,
      },
      '& .customer-experience-customer': {
        '& .name': {
          fontSize: '24px',
        },
        '& .occupation': {
          fontSize: '20px',
        },
      }
    },
    '& .customer-experience-quotation img':{
      width: '50px',
    },

  },
  '@media screen and (max-width: 767px) ': {
    '& .video__description': {
      padding: '10px 0 10px 0',
      '& .customer-experience-text': {
        fontSize: '18px',
        fontWeight: '400px',
        lineHeight: 2,
      },
      '& .customer-experience-customer': {
        '& .name': {
          fontSize: '24px',
        },
        '& .occupation': {
          fontSize: '20px',
        },
      }
    },
    '& .wrapper__video': {
      maxWidth: props.theme.maxWidth,
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '40px 10px',
    },
    '& .customer-experience-video': {
      backgroundColor: 'black',
      padding: '5px',
      video:{
        width: '100%',
        maxWidth: '800px',
      }
    },
    '& .customer-experience-btn': {
      display: 'none',
    },
    '& .customer-experience-quotation img': {
      width: '50px',
    },
  },

}));

export default CustomerExperienceStyle