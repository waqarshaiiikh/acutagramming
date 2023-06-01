import React from 'react'
import Theresa from '../.././../assets/Theresa.jpg'
import Jessa from '../.././../assets/Jessa.jpg'
import Matteo from '../.././../assets/Matteo.jpeg'
import Ben from '../.././../assets/Ben.jpg'
import styled from 'styled-components'

const ExperienceFrame = ({ className }) => {

  const customers = [
    { id: 1, image_src: Theresa, comment: '"These guys are the genius when it comes to social media growth"', name: "Theresa McConn", designation: "(Nutrition Coach)" },
    { id: 3, image_src: Matteo, comment: '"If you want to grow your social media without stress, hire them!!!"', name: "Matteo", designation: "(Business Coach)" },
    { id: 2, image_src: Jessa, comment: '“Acutagramming helped me reach over 10K followers on LinkedIn!”', name: "Jessa Fowler", designation: "(Mindset Coach)" },
    { id: 4, image_src: Ben, comment: '“I love the content they produce for my Instagram, highly recommend them”', name: "Ben Partin", designation: "(Business Coach)" }
  ]

  return (
    <div className={className}>
      <div className='experience-frame-text'>
        <h1>Coaches just like you</h1>
        <p>We help coaches just like yourself build a social media brand, grow a community and generate revenue!</p>
      </div>
      <div className='experience-frame-customers-shown' >
        {customers && customers.map(customer => (
          <div className='experience-frame-customer' key={customer.id}>
            <div className='experience-frame-customer-picture'>
              <img src={customer.image_src} alt={customer.name} />
            </div>
            <div className='experience-frame-customer-detail'>
              <h3 className='comment'>{customer.comment}</h3>
              <div className='name'>
                <p>{customer.name}</p>
                <p>{customer.designation}</p>
              </div>
            </div>
          </div>)
        )}
      </div>
    </div>
  )
}

const ExperienceFrameStyle = styled(ExperienceFrame)((props) => ({
  '&': {
    display: 'flex',
    maxWidth: '1140px',
    margin: 'auto',
    padding: '60px 0px',

  },
  '& .experience-frame-customers-shown': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    width: '73%',
    '& .experience-frame-customer-detail': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '0 10px',
      name: {
        fontSize: '18px',
        fontWeight: 400,
        color: '4A4A4A'
      },
      h3: {
        fontWeight: 500,
        color: '#0D0D0D',
        lineHeight: 1.4,
        fontSize: '18px'
      }
    }
  },
  '& .experience-frame-text': {
    width: '27%'
  },
  '& .experience-frame-text > *': {
    paddingBottom: '10px'
  },
  '& .experience-frame-customer': {
    flex: '0 0 400px',
    display: 'flex',
    padding: '0 10px',
    '& .experience-frame-customer-picture img': {
      maxWidth: '110px',
      borderRadius: '10px',
    },
  },
  '@media screen and (max-width: 767px) ': {
    '& ': {
      flexDirection: 'column',
    },
    '& .experience-frame-text': {
      width: '100%',
      padding: '10px'
    },
  },


}));

export default ExperienceFrameStyle