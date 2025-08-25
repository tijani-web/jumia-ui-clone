import { RiMenu2Line, RiMenu3Line, RiMenu4Line, RiQuestionMark, RiSearch2Line, RiShoppingCart2Line, RiUser2Line, RiUser3Line } from '@remixicon/react'
import React from 'react'
import Logo from"../assets/images/logo.png"

const MainNav = () => {
  return (
    <div className='mainNav'>
        <nav className='nav-1'>
            <div className="logo">
              <RiMenu2Line className='hamburger' style={{
                display: 'none',
                fontSize: '24px',
                cursor: 'pointer'
              }}/>
                <img src={Logo} alt="Logo" />
            </div>
            <div className="more">
                <div className="search-filter">
                    <RiSearch2Line className='search-icon'/>
                    <input type="text" placeholder='Search Products, brands, and catregories'/>
                </div>

                <div className="btnCategories">
                   <button className="searchBtn">Search</button>
                    <div className="account user-flex">
                      <RiUser3Line size={30}/>
                      <p>Account</p>
                    </div>
                    <div className="help user-flex">
                      <RiQuestionMark size={15} style={{fontWeight: 'bolder'}} className='help-icon'/>
                      <p>Help</p>
                    </div>
                    <div className="cart user-flex">
                      <RiShoppingCart2Line size={30}/>
                      <p>Cart</p>
                    </div>
                </div>
            </div>
          
        </nav>
    </div>
  )
}

export default MainNav