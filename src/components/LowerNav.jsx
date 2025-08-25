import { RiShieldStarLine, RiStarFill, RiStarHalfLine, RiStarLine } from '@remixicon/react'
import React from 'react'

const LowerNav = () => {
  return (
    <div className='lowerNav'>
        <nav>
            <div className="sell">
                <RiStarFill size={12} className='star-icon'/>
                <p>Sell on jumia</p>
            </div>
            <div className="icon-logo">
                <a className='mid-icon'>JUMIA <RiStarLine className='star-icon' size={12}/></a>
                <a className='mid-icon pay'><RiShieldStarLine size={12}/>PAY</a>
                <a className='mid-icon delivery'><RiStarLine size={12}/>DELIVERY</a>
            </div>
        </nav>
    </div>
  )
}

export default LowerNav