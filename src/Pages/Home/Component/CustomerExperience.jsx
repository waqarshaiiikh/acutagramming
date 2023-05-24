import React from 'react'
import Quotation from '../../../assets/Quotation-white.png'
import Video from '../../../assets/Melissa-Lin-Certified-Business-Coach.mp4'

const CustomerExperience = () => {
  return (
    <div className='customer-experience'>
      <div className='customer-experience-video'> <video controls> <source src={Video} type="video/mp4" /> </video></div>
      <div className='customer-experience-quotation'><img src={Quotation} alt="quotation-image" /></div>
      <div className='customer-experience-text'><p>I have been working with Acutagramming for more than a year now and my experience with them has just been above and beyond. They're so pleasant to work with ...</p></div>
      <div className='customer-experience-customer-name'><h3>Melissa Lin</h3></div>
      <div className='customer-experience-customer-designation'>{`(Business Coach)`}<h4>Melissa Lin</h4></div>
      <div className='customer-experience-customer-button'><button> View more examples</button></div>
    </div>
  )
}

export default CustomerExperience