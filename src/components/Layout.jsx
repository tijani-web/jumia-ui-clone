import React from 'react'
import UpperNav from './UpperNav'
import LowerNav from './LowerNav'
import MainNav from './MainNav'
import Footer from './Footer'
import ResponsiveLayout from './ResponsiveLayout'
import ResNav from './ResNav'
import ResSearch from './ResSearch'

const Layout = ({children}) => {
  return (
    <main className='mainLayout'>
        <UpperNav/>
        <LowerNav/>
        <MainNav/>
        <ResponsiveLayout/>
          <div className="">
            {children}
        </div>
        <Footer/>
    </main>
  )
}

export default Layout