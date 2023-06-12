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
      <div className='wrapper'>
        <div className='experience-column experience-frame-text'>
          <h2>Coaches just like you</h2>
          <p>We help coaches just like yourself build a social media brand, grow a community and generate revenue!</p>
        </div>
        <div className='experience-column experience-frame-customers-shown' >
          <div className='section section-1'>
            <div className='item'>
              <div className="photo">
                <img src={customers[0].image_src} />
              </div>
              <div className="comments">
                <h3>{customers[0].comment}</h3>
                <p>- {customers[0].name} {customers[0].designation}</p>
              </div>
            </div>
            <div className='item'>
            <div className="photo">
                <img src={customers[1].image_src} />
              </div>
              <div className="comments">
                <h3>{customers[1].comment}</h3>
                <p>- {customers[1].name} {customers[1].designation}</p>
              </div>
            </div>
          </div>
          <div className='section section-2'>
            <div className='item'>
            <div className="photo">
                <img src={customers[2].image_src} />
              </div>
              <div className="comments">
                <h3>{customers[2].comment}</h3>
                <p>- {customers[2].name} {customers[2].designation}</p>
              </div>
            </div>
            <div className='item'>
            <div className="photo">
                <img src={customers[3].image_src} />
              </div>
              <div className="comments">
                <h3>{customers[3].comment}</h3>
                <p>- {customers[3].name} {customers[3].designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ExperienceFrameStyle = styled(ExperienceFrame)((props) => ({
  '&': {
    padding: '80px 0px',

    '.wrapper': {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: '1140px',
      margin: 'auto',

      '.experience-frame-customers-shown': {
        display: 'flex',
        flexWrap: 'wrap',
        width: '64.474%',
  
        '.section': {
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
  
          '.item': {
            width: '50%',
            display: 'flex',
  
            '.photo': {
              width: '45%',
              marginRight: '15px',
  
              'img': {
                width: '100%',
                border: 'none',
                borderRadius: '11px',
              }
            },
  
            '.comments': {
              width: '100%',
  
              'h3': {
                lineHeight: '1.4',
                fontWeight: '500',
                color: '#0D0D0D',
                fontSize: '18px',
                marginBottom: '20px'
              },
  
              'p': {
                color: '#4A4A4A',
                fontSize: '18px',
                fontWeight: '400'
              }
            }
          }
        },
  
        '.section-2': {
          paddingTop: '30px'
        },
      },
  
      '.experience-frame-text': {
        width: '35.526%',
        padding: '10px',
    
        'h2': {
          marginBottom: '20px',
          fontSize: '38px',
          color: '#323232',
          fontWeight: '800',
          lineHeight: '1em'
        },
    
        'p': {
          fontSize: '20px',
          color: '#717171',
          fontWeight: '400',
          lineHeight: 1,
        }
      },

    },
  },

  '@media (max-width: 767px)': {
    '& .wrapper': {
      '.experience-frame-text, .experience-frame-customers-shown': {
        width: '100%',
      },

      '.experience-frame-customers-shown': {

        '.section-1': {
          paddingTop: '10px',
        },

        '.section .item': {
          width: '100%',
          display: 'block',
          textAlign: 'center',
        
          '.photo': {
            margin: 'auto'
          },

          '.comments': {
            'h3': {
              marginTop: '10px'
            },
            'p': {
              padding: '5px'
            }
          }
        }
      }
    }
  },

  '@media (max-width: 1024px)': {
    '& .wrapper .experience-frame-customers-shown .section .item .comments': {
      
      'h3': {
        fontSize: '16px'
      },

      'p': {
        fontSize: '15px'
      }
    }
  }

}));

export default ExperienceFrameStyle