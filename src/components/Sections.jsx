import React from 'react'
import Awoof from '../assets/images/jumify-awoof.png'
import Audios from '../assets/images/jumify-tv-audios.png'
import Arrivals from '../assets/images/jumify-arrival.gif'
import Phones from '../assets/images/jumify-phones-tablets.png'
import Clearance from '../assets/images/jumify-clearance.png'
import Appliances from '../assets/images/jumify-appliances.png'
import ProductsSection from './ProductsSection'

const Sections = () => {
  return (
    <div className='sections'>
        <div className="sectionsCard">
            <figure>
                <img src={Awoof} alt="" />
                <figcaption>Awoof</figcaption>
            </figure>
            <figure>
                <img src={Audios} alt="" />
                <figcaption>TV & Audio Deals</figcaption>
            </figure>
            <figure>
                <img src={Arrivals} alt="" />
                <figcaption>New Arrival</figcaption>
            </figure>
            <figure>
                <img src={Phones} alt="" />
                <figcaption>Phones & Tablets Deals</figcaption>
            </figure>
            <figure>
                <img src={Clearance} alt="" />
                <figcaption>Up to 80% Off</figcaption>
            </figure>
            <figure>
                <img src={Appliances} alt="" />
                <figcaption>Appliances Deals</figcaption>
            </figure>
        </div>
    </div>
  )
}

export default Sections