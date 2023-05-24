import React from 'react'
import Theresa from '../.././../assets/Theresa.jpg'
import Jessa from '../.././../assets/Jessa.jpg'
import Matteo from '../.././../assets/Matteo.jpeg'
import Ben from '../.././../assets/Ben.jpg'

const ExperienceFrame = () => {

  const customers = [
    { id: 1, image_src: Theresa, comment: '"These guys are the genius when it comes to social media growth"', name: "- Theresa McConn", designation : "(Nutrition Coach)" },
    { id: 2, image_src: Jessa,   comment: '“Acutagramming helped me reach over 10K followers on LinkedIn!”',  name: "Jessa Fowler"    , designation : "(Mindset Coach)"   },
    { id: 3, image_src: Matteo,  comment: '"If you want to grow your social media without stress, hire them!!!"', name: "Matteo"      , designation : "(Business Coach)"  },
    { id: 4, image_src: Ben,     comment: '“I love the content they produce for my Instagram, highly recommend them”', name: "Ben Partin", designation : "(Business Coach)" }
  ]

  return (
    <div className='experience-frame'>
      <div className='experience-frame-text'>
        <h1>Coaches just like you</h1>
        <p>We help coaches just like yourself build a social media brand, grow a community and generate revenue!</p>
      </div>
      <div className='experience-frame-customers-shown' >
        {customers && customers.map( customer =>(
        <div className='experience-frame-customer' key={customer.id}>
          <div className='experience-frame-customer-picture'>
            <img src={customer.image_src} alt={customer.name} />
          </div> 
          <div className='experience-frame-customer-detail'>
              <p>{customer.comment}</p>
              <p>{customer.name}</p>
              <p>{customer.designation}</p>
          </div>
        </div>)
        )}
      </div>
    </div>
  )
}

export default ExperienceFrame