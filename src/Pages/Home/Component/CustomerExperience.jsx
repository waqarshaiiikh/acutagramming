import React from 'react'
import Quotation from '../../../assets/Quotation-white.png'
import Video from '../../../assets/Melissa-Lin-Certified-Business-Coach.mp4'
import styled from 'styled-components'
import ButtonStyle from '../../CommonComponents/ButtonComponent'

const CustomerExperience = ({ className }) => {
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
            <ButtonStyle text='View more examples' variant='fill' color='black' ></ButtonStyle>
          </div>
        </div>

      </div>
    </section>
  )
}

const CustomerExperienceStyle = styled(CustomerExperience)(props => ({

  '&': {
    // border: '1px solid black',
    // maxWidth: props.theme.maxWidth,
    // margin: 'auto',
    wordWrap: 'breakWord',
    backgroundColor: props.theme.yellow,
    display: 'flex',
    margin: '6rem 2rem 4rem 2rem',
    borderRadius: '25px',
    '& .wrapper__video':{
      maxWidth: props.theme.maxWidth,
      margin: 'auto',
      display: 'flex',
      padding: '60px 0px',
    }
  },

  '& .video__description': {
    padding: '10px 30px 10px 40px',
    display: 'flex',
    flexDirection: 'column',
    gap:'2rem',
    '& .customer-experience-text':{
      fontSize: '30px',
      fontWeight: '400px',
      lineHeight: 2,
    },
    '& .customer-experience-customer':{
      lineHeight: 1,
      color: '#323232',

      '& .name':{
        fontSize: '40px',
        fontWeight: 600,
      },
      '& .occupation':{
        fontSize: '22px',
      },
      '& .occupation, .name':{
        paddingBottom:  '10px',
      },
    },  
    '& .customer-experience-btn button':{
      fontSize: '16px',
    },
  },
  '& .customer-experience-video': {
    backgroundColor: 'black',
    padding: '5px 10px',
    video : {
      maxWidth: '297px'
    }
  }

}));

export default CustomerExperienceStyle