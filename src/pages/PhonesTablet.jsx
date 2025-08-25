import React from 'react'
import Layout from '../components/Layout'
import { NavLink } from 'react-router-dom'
import PhonesTableProduct from '../components/PhonesTableProduct'

const PhonesTablet = () => {
  return (
    <Layout>
        <div className="appliances">
            <div className="appliances-con">
                <div className="top-pages">
                    <NavLink to={`/`} className='app-home'>Home</NavLink>
                    <p className='app-sign'>{`>`}</p>
                    <p app-app>Phones & Tablets</p>
                </div>
                <div className="cat-title">
                    <h1>Phones & Tablets</h1>
                </div>
                <div className="call-to-order">
                    <h1>CALL TO ORDER 0910081111111</h1>
                </div>

                <div className="call-to-order stock-deal">
                    <h1>Limited Stock Deal</h1>
                    <a href="">See All {`>`}</a>
                </div>
                <PhonesTableProduct/>
            </div>
        </div>
    </Layout>
  )
}

export default PhonesTablet