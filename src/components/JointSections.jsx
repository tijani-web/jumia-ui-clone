import React from 'react'
import Sections from './Sections'
import ProductsSection from './ProductsSection'
import FlashSales from './FlashSales'

const JointSections = () => {
  return (
    <div className='joint-sec'>
      <FlashSales/>
        <ProductsSection/>
    </div>
  )
}

export default JointSections