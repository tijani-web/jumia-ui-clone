import React from 'react'
import Jforce from '../assets/images/JFORCE-2.gif'
import { RiPhoneLine, RiStore2Line, RiTruckLine } from '@remixicon/react'

const HeroGif = () => {
  return (
    <div className='heroGif'>
      <div className="contact-box">
        <div className="item">
        <RiPhoneLine className="icon" />
        <span style={{fontWeight: '500'}}>CALL TO ORDER<br /><small style={{fontWeight:'300', fontSize:'0.9rem'}}>0700-600-0000, 0201888...</small></span>
        </div>
        <div className="item">
        <RiStore2Line className="icon" />
        <span>Sell on Jumia</span>
      </div>
      <div className="item">
        <RiTruckLine className="icon" />
        <span>Send Your Packages</span>
      </div>
    </div>
  
        <div className="giv">
            <img src={Jforce} alt="" />
        </div>
    </div>
  )
}

export default HeroGif