import React from 'react'
import Layout from './Layout'
import HeroSlider from './HeroSlider'
import HeroGif from './HeroGif'
import Sidebar from './Sidebar'

const Hero = () => {
  return (
      <div className='hero'>
        <div className="container">
          <Sidebar/>
          <HeroSlider/>
          <HeroGif/>
        </div>
      </div>
      
  
  )
}

export default Hero