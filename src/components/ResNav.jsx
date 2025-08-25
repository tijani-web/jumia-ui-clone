import { RiMenu2Line, RiShoppingCart2Line, RiUser3Line } from '@remixicon/react';
import React from 'react';
import Logo from "../assets/images/logo.png";

const ResNav = ({ toggleSidebar }) => {  
  return (
    <div className='altNav'>
        <nav className='nav-1' style={{
            display: 'flex',
            justifyContent: 'space-between',
         }}>
            <div className="logo">
              <RiMenu2Line 
                className='hamburger' 
                style={{
                  fontSize: '30px',
                  color: 'black',
                  cursor: 'pointer'
                }}
                onClick={toggleSidebar}  //click handler
              />
              <img src={Logo} alt="Logo" />
            </div>
            <div className="more mobile-more">
                <div className="btnCategories">
                    <div className="account user-flex">
                      <RiUser3Line size={30}/>
                    </div>
                    <div className="cart user-flex">
                      <RiShoppingCart2Line size={30}/>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default ResNav;