import React from 'react'
import Hero from '../components/Hero'
import Sections from '../components/Sections'
import ProductsSection from '../components/ProductsSection'
import JointSections from '../components/JointSections'
import Layout from '../components/Layout'

const home = () => {
  return (
    <>
      <Hero/>
      <Sections/>
     <JointSections/>
    
    {/* <Sections/> */}
    {/* <ProductsSection/> */}
    </>
  )
}

export default home