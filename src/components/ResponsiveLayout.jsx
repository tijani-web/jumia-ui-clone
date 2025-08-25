import React, { useState, useEffect } from 'react';
import ResNav from './ResNav';
import ResSearch from './ResSearch';
import { RiCloseLine, RiAlipayLine, RiAppleLine, RiHome2Line, RiRadio2Line, RiShirtLine, RiTv2Line, RiGamepadLine, RiMusicAiLine, RiPokerHeartsLine, RiTabletLine } from '@remixicon/react';
import { NavLink } from 'react-router-dom';

const ResponsiveLayout = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle body scroll
  useEffect(() => {
    if (mobileSidebarOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
  }, [mobileSidebarOpen]);

  return (
    <>
      {/* Mobile Header Area */}
      <div className='resNav'>
        <ResNav toggleSidebar={() => setMobileSidebarOpen(true)} />
        <hr className="divider" />
        <ResSearch />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobile && mobileSidebarOpen && (
        <div className="mobile-sidebar-overlay">
          <div className="mobile-sidebar">
            <div className="mobile-sidebar-header">
              <h3>Categories</h3>
              <button 
                className="close-sidebar-btn"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <RiCloseLine size={24} />
              </button>
            </div>
            
            {/* Rebuilt Sidebar Content */}
            <div className="mobile-sidebar-content">
              <div className="sidebar-cat">
                <NavLink to={`/appliances/`} className="cat" onClick={() => setMobileSidebarOpen(false)}>
                  <RiPokerHeartsLine className='ic'/>
                  <span>Appliances</span>
                </NavLink>
                <NavLink to={`/phones-tablets/`} className="cat" onClick={() => setMobileSidebarOpen(false)}>
                  <RiTabletLine className='ic'/>
                  <span>Phones & Tablets</span>
                </NavLink>
                <NavLink to={`/health-beauty/`} className="cat" onClick={() => setMobileSidebarOpen(false)}>
                  <RiAlipayLine className='ic'/>
                  <span>Health & Beauty</span>
                </NavLink>
                <NavLink to={`/home-office/`} className="cat" onClick={() => setMobileSidebarOpen(false)}>
                  <RiHome2Line className='ic'/>
                  <span>Home & Office</span>
                </NavLink>
                <NavLink to={`/electronics/`} className="cat" onClick={() => setMobileSidebarOpen(false)}>
                  <RiRadio2Line className='ic'/>
                  <span>Electronics</span>
                </NavLink>
                <NavLink to={`/fashion/`} className="cat" onClick={() => setMobileSidebarOpen(false)}>
                  <RiShirtLine className='ic'/>
                  <span>Fashion</span>
                </NavLink>
                <NavLink to={`/supermarket/`} className="cat" onClick={() => setMobileSidebarOpen(false)}>
                  <RiAppleLine className='ic'/>
                  <span>Supermarket</span>
                </NavLink>
                <NavLink to={`/computing/`} className="cat" onClick={() => setMobileSidebarOpen(false)}>
                  <RiTv2Line className='ic'/>
                  <span>Computing</span>
                </NavLink>
                <NavLink to={`/gaming/`} className="cat" onClick={() => setMobileSidebarOpen(false)}>
                  <RiGamepadLine className='ic'/>
                  <span>Gaming</span>
                </NavLink>
                <NavLink to={`/musical-instruments/`} className="cat" onClick={() => setMobileSidebarOpen(false)}>
                  <RiMusicAiLine className='ic'/>
                  <span>Musical Instruments</span>
                </NavLink>
              </div>
            </div>
          </div>
          <div 
            className="mobile-sidebar-backdrop" 
            onClick={() => setMobileSidebarOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default ResponsiveLayout;