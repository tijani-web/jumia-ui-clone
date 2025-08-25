
import { RiAlipayLine, RiAppleLine, RiCellphoneLine, RiGamepadLine, RiHome2Line, RiMusicAiLine, RiPhoneCameraLine, RiPhoneLine, RiPokerHeartsFill, RiPokerHeartsLine, RiRadio2Line, RiSettings4Line, RiShirtLine, RiTableAltLine, RiTabletLine, RiTv2Line, RiTvLine } from '@remixicon/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-cat">
            <NavLink to={`/appliances/`} className="cat">
             <RiPokerHeartsLine className='ic'/>
             <span>Appliances</span>
            </NavLink>
            <NavLink to={`/phones-tablets/`} className="cat">
             <RiTabletLine className='ic'/>
             <span>Phones & Tablets</span>
            </NavLink>
            <NavLink to={`/health-beauty/`} className="cat">
             <RiAlipayLine className='ic'/>
             <span>Health & Beauty</span>
            </NavLink>
            <NavLink to={`/phones-tablets/`} className="cat">
             <RiHome2Line className='ic'/>
             <span>Home & Office</span>
            </NavLink>
            <NavLink to={`/health-beauty/`} className="cat">
             <RiRadio2Line className='ic'/>
             <span>Electronics</span>
            </NavLink>
            <NavLink to={`/appliances/`} className="cat">
             <RiShirtLine className='ic'/>
             <span>Fashion</span>
            </NavLink>
            <NavLink to={`/appliances/`} className="cat">
             <RiAppleLine className='ic'/>
             <span>Supermarket</span>
            </NavLink>
            <NavLink to={`/phones-tablets/`} className="cat">
             <RiTv2Line className='ic'/>
             <span>Computing</span>
            </NavLink>
            <NavLink to={`/phones-tablets/`} className="cat">
             <RiGamepadLine className='ic'/>
             <span>Gaming</span>
            </NavLink>
            <NavLink to={`/health-beauty/`} className="cat">
             <RiGamepadLine className='ic'/>
             <span>Gaming</span>
            </NavLink>
            <NavLink to={`/appliances/`} className="cat">
             <RiMusicAiLine className='ic'/>
             <span>Musical Instruments</span>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar