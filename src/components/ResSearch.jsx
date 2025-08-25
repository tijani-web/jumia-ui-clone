import { RiSearch2Line } from '@remixicon/react'
import React from 'react'

const ResSearch = () => {
  return (
     <div className="search-filter" style={{
        marginBottom: '0.7rem'
     }}>
        <RiSearch2Line className='search-icon' />
        <input type="text" placeholder='Search Products, brands, and catregories' style={{
            width: '100%'
        }}/>
     </div>
  )
}

export default ResSearch